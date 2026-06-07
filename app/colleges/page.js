'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { useLang } from '@/lib/LanguageContext'

const colleges = [
  // ── AP ENGINEERING CENTRAL ──
  { name: "IIT Tirupati", website: "https://iittp.ac.in", website: "https://iittp.ac.in", location: "Tirupati", district: "Tirupati", state: "AP", category: "Engineering", type: "Central Govt", fees: "₹2.5L/year", exam: "JEE Advanced", access: "🌍 Open to All" },
  // ── AP ENGINEERING DEEMED ──
  { name: "VIT AP", website: "https://vitap.ac.in", location: "Amaravati", district: "Guntur", state: "AP", category: "Engineering", type: "Deemed", fees: "₹2.5L/year", exam: "VITEEE", access: "🌍 Open to All" },
  { name: "KL University", website: "https://kluniversity.in", location: "Vaddeswaram, Guntur", district: "Guntur", state: "AP", category: "Engineering", type: "Deemed", fees: "₹2L/year", exam: "KLEEE", access: "🌍 Open to All" },
  { name: "GITAM University", website: "https://gitam.edu", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Engineering", type: "Deemed", fees: "₹2.2L/year", exam: "GAT", access: "🌍 Open to All" },
  { name: "Amrita Amaravati", location: "Amaravati", district: "Guntur", state: "AP", category: "Engineering", type: "Deemed", fees: "₹2L/year", exam: "AEEE", access: "🌍 Open to All" },
  { name: "Vignan University", website: "https://vignan.ac.in", location: "Vadlamudi, Guntur", district: "Guntur", state: "AP", category: "Engineering", type: "Deemed", fees: "₹1.5L/year", exam: "AP EAPCET", access: "🌍 Open to All" },
  { name: "Koneru Lakshmaiah University", location: "Vaddeswaram", district: "Guntur", state: "AP", category: "Engineering", type: "Deemed", fees: "₹1.8L/year", exam: "AP EAPCET", access: "🌍 Open to All" },
  // ── AP ENGINEERING STATE GOVT ──
  { name: "AU College of Engineering", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Engineering", type: "State Govt", fees: "₹70K/year", exam: "AP EAPCET", access: "⚠️ AP Domicile" },
  { name: "JNTU Kakinada", location: "Kakinada", district: "Kakinada", state: "AP", category: "Engineering", type: "State Govt", fees: "₹75K/year", exam: "AP EAPCET", access: "⚠️ AP Domicile" },
  { name: "JNTUA Anantapur", location: "Anantapur", district: "Anantapur", state: "AP", category: "Engineering", type: "State Govt", fees: "₹70K/year", exam: "AP EAPCET", access: "⚠️ AP Domicile" },
  { name: "SV University Engineering", location: "Tirupati", district: "Tirupati", state: "AP", category: "Engineering", type: "State Govt", fees: "₹60K/year", exam: "AP EAPCET", access: "⚠️ AP Domicile" },
  { name: "Nagarjuna University Engg", location: "Guntur", district: "Guntur", state: "AP", category: "Engineering", type: "State Govt", fees: "₹65K/year", exam: "AP EAPCET", access: "⚠️ AP Domicile" },
  { name: "Andhra University Engg", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Engineering", type: "State Govt", fees: "₹55K/year", exam: "AP EAPCET", access: "⚠️ AP Domicile" },
  // ── AP ENGINEERING PRIVATE ──
  { name: "SVEC", location: "Tirupati", district: "Tirupati", state: "AP", category: "Engineering", type: "Private", fees: "₹1.2L/year", exam: "AP EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "Raghu Engineering College", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Engineering", type: "Private", fees: "₹90K/year", exam: "AP EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "Aditya Engineering College", location: "Surampalem, East Godavari", district: "East Godavari", state: "AP", category: "Engineering", type: "Private", fees: "₹85K/year", exam: "AP EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "Sree Vidyanikethan Engg", location: "Tirupati", district: "Tirupati", state: "AP", category: "Engineering", type: "Private", fees: "₹95K/year", exam: "AP EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "Prasad V Potluri Siddhartha", location: "Vijayawada", district: "Krishna", state: "AP", category: "Engineering", type: "Private", fees: "₹1L/year", exam: "AP EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "Vasireddy Venkatadri Tech", location: "Guntur", district: "Guntur", state: "AP", category: "Engineering", type: "Private", fees: "₹1L/year", exam: "AP EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "Chirala Engineering College", location: "Chirala, Prakasam", district: "Prakasam", state: "AP", category: "Engineering", type: "Private", fees: "₹80K/year", exam: "AP EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "Lendi Institute of Engg", location: "Rajam, Srikakulam", district: "Srikakulam", state: "AP", category: "Engineering", type: "Private", fees: "₹80K/year", exam: "AP EAPCET", access: "🏠 AP/TS Preferred" },
  // ── AP RGUKT ──
  { name: "RGUKT Nuzvid", location: "Nuzvid, Krishna", district: "Krishna", state: "AP", category: "Engineering", rgukt: true, type: "FREE Residential", fees: "Free", exam: "10th Marks Only", access: "⚠️ AP Domicile" },
  { name: "RGUKT Ongole", location: "Ongole, Prakasam", district: "Prakasam", state: "AP", category: "Engineering", rgukt: true, type: "FREE Residential", fees: "Free", exam: "10th Marks Only", access: "⚠️ AP Domicile" },
  { name: "RGUKT Srikakulam", location: "Etcherla, Srikakulam", district: "Srikakulam", state: "AP", category: "Engineering", rgukt: true, type: "FREE Residential", fees: "Free", exam: "10th Marks Only", access: "⚠️ AP Domicile" },
  { name: "RGUKT RK Valley", location: "Vempalli, Kadapa", district: "Kadapa", state: "AP", category: "Engineering", rgukt: true, type: "FREE Residential", fees: "Free", exam: "10th Marks Only", access: "⚠️ AP Domicile" },
  { name: "RGUKT Idupulapaya", location: "Idupulapaya, Kadapa", district: "Kadapa", state: "AP", category: "Engineering", rgukt: true, type: "FREE Residential", fees: "Free", exam: "10th Marks Only", access: "⚠️ AP Domicile" },
  // ── AP MEDICAL ──
  { name: "AIIMS Mangalagiri", website: "https://aiimsmangalagiri.edu.in", location: "Guntur", district: "Guntur", state: "AP", category: "Medical", type: "Central Govt", fees: "₹5K/year", exam: "NEET", access: "🌍 Open to All" },
  { name: "Andhra Medical College", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", access: "⚠️ AP Domicile" },
  { name: "Guntur Medical College", location: "Guntur", district: "Guntur", state: "AP", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", access: "⚠️ AP Domicile" },
  { name: "Kurnool Medical College", location: "Kurnool", district: "Kurnool", state: "AP", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", access: "⚠️ AP Domicile" },
  { name: "Rangaraya Medical College", location: "Kakinada", district: "Kakinada", state: "AP", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", access: "⚠️ AP Domicile" },
  { name: "SVMC Tirupati", location: "Tirupati", district: "Tirupati", state: "AP", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", access: "⚠️ AP Domicile" },
  { name: "Narayana Medical College", location: "Nellore", district: "Nellore", state: "AP", category: "Medical", type: "Private", fees: "₹11L/year", exam: "NEET", access: "🌍 Open to All" },
  { name: "NRI Medical College", location: "Guntur", district: "Guntur", state: "AP", category: "Medical", type: "Private", fees: "₹10L/year", exam: "NEET", access: "🌍 Open to All" },
  { name: "Dr PSIMS Vijayawada", location: "Vijayawada", district: "Krishna", state: "AP", category: "Medical", type: "Private", fees: "₹9L/year", exam: "NEET", access: "🌍 Open to All" },
  // ── AP LAW ──
  { name: "AU Law College", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Law", type: "State Govt", fees: "₹15K/year", exam: "CLAT", access: "🏠 AP/TS Preferred" },
  { name: "SV Law College", location: "Tirupati", district: "Tirupati", state: "AP", category: "Law", type: "State Govt", fees: "₹15K/year", exam: "CLAT", access: "🏠 AP/TS Preferred" },
  { name: "Nagarjuna Law College", location: "Guntur", district: "Guntur", state: "AP", category: "Law", type: "State Govt", fees: "₹12K/year", exam: "CLAT", access: "🏠 AP/TS Preferred" },
  { name: "Krishna University Law", location: "Machilipatnam", district: "Krishna", state: "AP", category: "Law", type: "State Govt", fees: "₹12K/year", exam: "CLAT", access: "🏠 AP/TS Preferred" },
  // ── AP COMMERCE ──
  { name: "AU Commerce Department", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Commerce", type: "State Govt", fees: "₹12K/year", exam: "CUET", access: "🏠 AP/TS Preferred" },
  { name: "SV University Commerce", location: "Tirupati", district: "Tirupati", state: "AP", category: "Commerce", type: "State Govt", fees: "₹10K/year", exam: "CUET", access: "🏠 AP/TS Preferred" },
  { name: "Nagarjuna University Commerce", location: "Guntur", district: "Guntur", state: "AP", category: "Commerce", type: "State Govt", fees: "₹10K/year", exam: "CUET", access: "🏠 AP/TS Preferred" },
  { name: "Krishna University Commerce", location: "Machilipatnam", district: "Krishna", state: "AP", category: "Commerce", type: "State Govt", fees: "₹8K/year", exam: "CUET", access: "🏠 AP/TS Preferred" },
  { name: "Adikavi Nannaya University", location: "Rajahmundry", district: "East Godavari", state: "AP", category: "Commerce", type: "State Govt", fees: "₹8K/year", exam: "CUET", access: "🏠 AP/TS Preferred" },
  // ── AP POLYTECHNIC ──
  { name: "Govt Polytechnic Visakhapatnam", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", access: "⚠️ AP Domicile" },
  { name: "Govt Polytechnic Kakinada", location: "Kakinada", district: "Kakinada", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", access: "⚠️ AP Domicile" },
  { name: "Govt Polytechnic Guntur", location: "Guntur", district: "Guntur", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", access: "⚠️ AP Domicile" },
  { name: "Govt Polytechnic Tirupati", location: "Tirupati", district: "Tirupati", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", access: "⚠️ AP Domicile" },
  { name: "Govt Polytechnic Kurnool", location: "Kurnool", district: "Kurnool", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", access: "⚠️ AP Domicile" },
  { name: "Govt Polytechnic Nellore", location: "Nellore", district: "Nellore", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", access: "⚠️ AP Domicile" },
  { name: "Govt Polytechnic Kadapa", location: "Kadapa", district: "Kadapa", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", access: "⚠️ AP Domicile" },
  { name: "Govt Polytechnic Anantapur", location: "Anantapur", district: "Anantapur", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", access: "⚠️ AP Domicile" },
  { name: "Govt Polytechnic Srikakulam", location: "Srikakulam", district: "Srikakulam", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", access: "⚠️ AP Domicile" },
  { name: "Govt Polytechnic Vizianagaram", location: "Vizianagaram", district: "Vizianagaram", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", access: "⚠️ AP Domicile" },
  { name: "Govt Polytechnic Eluru", location: "Eluru, West Godavari", district: "West Godavari", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", access: "⚠️ AP Domicile" },
  // ── TS ENGINEERING CENTRAL ──
  { name: "IIT Hyderabad", website: "https://iith.ac.in", location: "Sangareddy", district: "Sangareddy", state: "TS", category: "Engineering", type: "Central Govt", fees: "₹2.5L/year", exam: "JEE Advanced", access: "🌍 Open to All" },
  { name: "NIT Warangal", website: "https://nitw.ac.in", location: "Warangal", district: "Warangal", state: "TS", category: "Engineering", type: "Central Govt", fees: "₹1.5L/year", exam: "JEE Mains", access: "🌍 Open to All" },
  { name: "BITS Hyderabad", website: "https://www.bits-pilani.ac.in/hyderabad", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Deemed", fees: "₹4.5L/year", exam: "BITSAT", access: "🌍 Open to All" },
  // ── TS RGUKT ──
  { name: "RGUKT Basar", location: "Basar, Nirmal", district: "Nirmal", state: "TS", category: "Engineering", rgukt: true, type: "FREE Residential", fees: "Free", exam: "10th Marks Only", access: "⚠️ TS Domicile" },
  // ── TS ENGINEERING STATE GOVT ──
  { name: "JNTU Hyderabad", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "State Govt", fees: "₹80K/year", exam: "TS EAPCET", access: "⚠️ TS Domicile" },
  { name: "Osmania University Engg", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "State Govt", fees: "₹70K/year", exam: "TS EAPCET", access: "⚠️ TS Domicile" },
  { name: "Kakatiya University Engg", location: "Warangal", district: "Warangal", state: "TS", category: "Engineering", type: "State Govt", fees: "₹65K/year", exam: "TS EAPCET", access: "⚠️ TS Domicile" },
  { name: "University College of Engg Kothagudem", location: "Kothagudem", district: "Bhadradri Kothagudem", state: "TS", category: "Engineering", type: "State Govt", fees: "₹60K/year", exam: "TS EAPCET", access: "⚠️ TS Domicile" },
  // ── TS ENGINEERING PRIVATE ──
  { name: "Chaitanya Bharathi Institute", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Private", fees: "₹1.2L/year", exam: "TS EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "Vardhaman College of Engg", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Private", fees: "₹1L/year", exam: "TS EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "Malla Reddy Engineering", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Private", fees: "₹1L/year", exam: "TS EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "SR Engineering College", location: "Warangal", district: "Warangal", state: "TS", category: "Engineering", type: "Private", fees: "₹90K/year", exam: "TS EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "Sreenidhi Institute", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Private", fees: "₹1.3L/year", exam: "TS EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "CMR College of Engineering", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Private", fees: "₹1L/year", exam: "TS EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "Mahatma Gandhi Institute", location: "Nalgonda", district: "Nalgonda", state: "TS", category: "Engineering", type: "Private", fees: "₹85K/year", exam: "TS EAPCET", access: "🏠 AP/TS Preferred" },
  // ── TS MEDICAL ──
  { name: "Osmania Medical College", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Medical", type: "State Govt", fees: "₹30K/year", exam: "NEET", access: "⚠️ TS Domicile" },
  { name: "Gandhi Medical College", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Medical", type: "State Govt", fees: "₹30K/year", exam: "NEET", access: "⚠️ TS Domicile" },
  { name: "Kakatiya Medical College", location: "Warangal", district: "Warangal", state: "TS", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", access: "⚠️ TS Domicile" },
  { name: "Govt Medical College Nizamabad", location: "Nizamabad", district: "Nizamabad", state: "TS", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", access: "⚠️ TS Domicile" },
  { name: "Govt Medical College Nalgonda", location: "Nalgonda", district: "Nalgonda", state: "TS", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", access: "⚠️ TS Domicile" },
  { name: "KIMS Hyderabad", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Medical", type: "Private", fees: "₹12L/year", exam: "NEET", access: "🌍 Open to All" },
  { name: "Apollo Medical College", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Medical", type: "Private", fees: "₹14L/year", exam: "NEET", access: "🌍 Open to All" },
  { name: "Yashoda Medical College", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Medical", type: "Private", fees: "₹11L/year", exam: "NEET", access: "🌍 Open to All" },
  // ── TS LAW ──
  { name: "NALSAR University", website: "https://nalsar.ac.in", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Law", type: "National", fees: "₹1.5L/year", exam: "CLAT", access: "🌍 Open to All" },
  { name: "OU College of Law", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Law", type: "State Govt", fees: "₹20K/year", exam: "CLAT", access: "🏠 AP/TS Preferred" },
  { name: "Kakatiya University Law", location: "Warangal", district: "Warangal", state: "TS", category: "Law", type: "State Govt", fees: "₹15K/year", exam: "CLAT", access: "🏠 AP/TS Preferred" },
  // ── TS COMMERCE ──
  { name: "Osmania University Commerce", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Commerce", type: "State Govt", fees: "₹10K/year", exam: "CUET", access: "🏠 AP/TS Preferred" },
  { name: "Kakatiya University Commerce", location: "Warangal", district: "Warangal", state: "TS", category: "Commerce", type: "State Govt", fees: "₹8K/year", exam: "CUET", access: "🏠 AP/TS Preferred" },
  { name: "Mahatma Gandhi University Commerce", location: "Nalgonda", district: "Nalgonda", state: "TS", category: "Commerce", type: "State Govt", fees: "₹8K/year", exam: "CUET", access: "🏠 AP/TS Preferred" },
  // ── TS POLYTECHNIC ──
  { name: "Govt Polytechnic Hyderabad", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹15K/year", exam: "TS POLYCET", access: "⚠️ TS Domicile" },
  { name: "Govt Polytechnic Warangal", location: "Warangal", district: "Warangal", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹15K/year", exam: "TS POLYCET", access: "⚠️ TS Domicile" },
  { name: "Govt Polytechnic Nizamabad", location: "Nizamabad", district: "Nizamabad", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", access: "⚠️ TS Domicile" },
  { name: "Govt Polytechnic Karimnagar", location: "Karimnagar", district: "Karimnagar", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", access: "⚠️ TS Domicile" },
  { name: "Govt Polytechnic Khammam", location: "Khammam", district: "Khammam", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", access: "⚠️ TS Domicile" },
  { name: "Govt Polytechnic Nalgonda", location: "Nalgonda", district: "Nalgonda", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", access: "⚠️ TS Domicile" },
  { name: "Govt Polytechnic Mahbubnagar", location: "Mahbubnagar", district: "Mahbubnagar", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", access: "⚠️ TS Domicile" },
  { name: "Govt Polytechnic Adilabad", location: "Adilabad", district: "Adilabad", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", access: "⚠️ TS Domicile" },
  // ── PHARMACY ──
  { name: "Shri Vishnu College of Pharmacy", location: "Bhimavaram, West Godavari", district: "West Godavari", state: "AP", category: "Pharmacy", type: "Private", fees: "₹60K/year", exam: "AP EAPCET", access: "🏠 AP/TS Preferred" },
  { name: "University College of Pharmaceutical Sciences Kakatiya", location: "Warangal", district: "Warangal", state: "TS", category: "Pharmacy", type: "State Govt", fees: "₹20K/year", exam: "TS EAPCET", access: "⚠️ TS Domicile" },
  { name: "JNTU College of Pharmacy", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Pharmacy", type: "State Govt", fees: "₹25K/year", exam: "TS EAPCET", access: "⚠️ TS Domicile" },
]

const categoryColor = {
  Engineering: "border-blue-500",
  Medical: "border-green-500",
  Law: "border-orange-500",
  Commerce: "border-purple-500",
  Polytechnic: "border-red-500",
  Pharmacy: "border-teal-500",
}

const accessColor = (access) => {
  if (access.includes("Open")) return "text-green-400"
  if (access.includes("Preferred")) return "text-cyan-400"
  return "text-red-400"
}

export default function Colleges() {
  const { t } = useLang()
  const c = t.colleges

  const [selectedState, setSelectedState] = useState('All')
  const [selectedDistrict, setSelectedDistrict] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const states = ["All", "AP", "TS"]
  const categories = ["All", "Engineering", "Medical", "Law", "Commerce", "Polytechnic", "Pharmacy"]

  const apDistricts = ["All", "Visakhapatnam", "Vizianagaram", "Srikakulam", "East Godavari", "West Godavari", "Krishna", "Guntur", "Prakasam", "Nellore", "Kurnool", "Kadapa", "Anantapur", "Tirupati", "Kakinada"]
  const tsDistricts = ["All", "Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Nalgonda", "Mahbubnagar", "Adilabad", "Nirmal", "Sangareddy", "Bhadradri Kothagudem"]
  const districts = selectedState === "AP" ? apDistricts : selectedState === "TS" ? tsDistricts : ["All"]

  const filtered = colleges.filter(col => {
    if (selectedState !== "All" && col.state !== selectedState) return false
    if (selectedDistrict !== "All" && col.district !== selectedDistrict) return false
    if (selectedCategory !== "All" && col.category !== selectedCategory) return false
    return true
  })

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 font-sans">
      <Navbar active="colleges" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
          <div>
            <h2 className="text-4xl font-bold mb-2 tracking-tight">{c.title}</h2>
            <p className="text-slate-400">{c.subtitle}</p>
          </div>
          <p className="text-slate-500 text-xs mt-4 md:mt-0" suppressHydrationWarning>
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="bg-slate-800/50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
          <p className="text-slate-300 text-sm font-semibold flex items-center gap-2 mb-1">
            <span>ℹ️</span> Important Notice
          </p>
          <p className="text-slate-400 text-xs">
            College fees, admission processes, rankings, and eligibility criteria can change annually.
            The data provided here is for general guidance. Please verify all details from official college websites.
          </p>
        </div>

        {/* Access Legend */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <span className="bg-slate-800 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-green-400">🌍 Open to All States</span>
          <span className="bg-slate-800 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-cyan-400">🏠 AP/TS Students Preferred</span>
          <span className="bg-slate-800 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-red-400">⚠️ State Domicile Required</span>
        </div>

        {/* RGUKT Banner */}
        <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-4 mb-6 hover:scale-[1.01] transition-all duration-200 ease-in-out">
          <p className="text-cyan-400 font-bold">🌟 RGUKT — FREE Engineering After 10th for AP & TS Students!</p>
          <p className="text-blue-200 text-sm mt-1">6-year integrated B.Tech. No intermediate needed. Fully residential with food included. Based on 10th marks only. AP campuses: Nuzvid, Ongole, Srikakulam, RK Valley, Idupulapaya. TS campus: Basar (Nirmal).</p>
        </div>

        {/* Filters */}
        <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-4 mb-6">
          <p className="text-slate-400 text-sm mb-3 font-medium">Filter colleges:</p>
          <div className="flex gap-4 flex-wrap">
            <div>
              <p className="text-xs text-slate-500 mb-1">{c.filterState}</p>
              <div className="flex gap-2">
                {states.map(s => (
                  <button key={s} onClick={() => { setSelectedState(s); setSelectedDistrict('All') }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out ${selectedState === s ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
                    {s === 'All' ? c.all : s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-500 mb-1">{c.filterCategory}</p>
              <div className="flex gap-2 flex-wrap">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out ${selectedCategory === cat ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
                    {cat === 'All' ? c.all : cat}
                  </button>
                ))}
              </div>
            </div>

            {selectedState !== 'All' && (
              <div>
                <p className="text-xs text-slate-500 mb-1">{c.filterDistrict}</p>
                <div className="flex gap-2 flex-wrap">
                  {districts.map(d => (
                    <button key={d} onClick={() => setSelectedDistrict(d)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out ${selectedDistrict === d ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
                      {d === 'All' ? c.all : d}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-4">{filtered.length} colleges found</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((college, i) => {
            const CardWrapper = college.website
              ? ({ children }) => <a href={college.website} target="_blank" rel="noopener noreferrer">{children}</a>
              : ({ children }) => <div>{children}</div>
            return (
              <CardWrapper key={i}>
                <div className={`bg-slate-800 border border-slate-700/60 border-l-4 ${categoryColor[college.category] || 'border-slate-500'} rounded-xl p-4 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.12)] hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer h-full`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        {college.name}
                        {college.rgukt && <span className="text-xs bg-blue-950 text-cyan-400 border border-blue-500/30 px-1.5 py-0.5 rounded font-normal">RGUKT · FREE</span>}
                        {college.website && <span className="text-slate-500 text-xs font-normal">↗</span>}
                      </h4>
                      <p className="text-slate-400 text-sm">{college.location}, {college.state}</p>
                      <p className={`text-xs mt-1 ${accessColor(college.access)}`}>{college.access}</p>
                    </div>
                    <div className="text-right ml-2">
                      <span className="text-xs bg-slate-750 px-2 py-1 rounded border border-slate-700/50 text-slate-300">{college.type}</span>
                      <p className="text-xs text-slate-500 mt-1">{college.category}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <div>
                      <p className="text-slate-500 text-xs">{c.fees}</p>
                      <p className="text-cyan-400 text-sm font-bold">{college.fees}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{c.exam}</p>
                      <p className="text-white text-sm">{college.exam}</p>
                    </div>
                  </div>
                </div>
              </CardWrapper>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p className="text-lg">{c.noColleges}</p>
          </div>
        )}
      </div>
    </main>
  )
}
