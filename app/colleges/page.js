'use client'
import { useState } from 'react'

export default function Colleges() {
  const [selectedState, setSelectedState] = useState('All')
  const [selectedDistrict, setSelectedDistrict] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const colleges = [
    // ── AP ENGINEERING CENTRAL ──
    { name: "IIT Tirupati", location: "Tirupati", district: "Tirupati", state: "AP", category: "Engineering", type: "Central Govt", fees: "₹2.5L/year", exam: "JEE Advanced", rating: 5, access: "🌍 Open to All" },
    { name: "NIT Tadepalligudem", location: "West Godavari", district: "West Godavari", state: "AP", category: "Engineering", type: "Central Govt", fees: "₹1.5L/year", exam: "JEE Mains", rating: 5, access: "🌍 Open to All" },
    // ── AP ENGINEERING DEEMED ──
    { name: "VIT AP", location: "Amaravati", district: "Guntur", state: "AP", category: "Engineering", type: "Deemed", fees: "₹2.5L/year", exam: "VITEEE", rating: 4, access: "🌍 Open to All" },
    { name: "KL University", location: "Vaddeswaram, Guntur", district: "Guntur", state: "AP", category: "Engineering", type: "Deemed", fees: "₹2L/year", exam: "KLEEE", rating: 4, access: "🌍 Open to All" },
    { name: "GITAM University", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Engineering", type: "Deemed", fees: "₹2.2L/year", exam: "GAT", rating: 4, access: "🌍 Open to All" },
    { name: "Amrita Amaravati", location: "Amaravati", district: "Guntur", state: "AP", category: "Engineering", type: "Deemed", fees: "₹2L/year", exam: "AEEE", rating: 4, access: "🌍 Open to All" },
    { name: "Vignan University", location: "Vadlamudi, Guntur", district: "Guntur", state: "AP", category: "Engineering", type: "Deemed", fees: "₹1.5L/year", exam: "AP EAPCET", rating: 4, access: "🌍 Open to All" },
    { name: "Koneru Lakshmaiah University", location: "Vaddeswaram", district: "Guntur", state: "AP", category: "Engineering", type: "Deemed", fees: "₹1.8L/year", exam: "AP EAPCET", rating: 4, access: "🌍 Open to All" },
    // ── AP ENGINEERING STATE GOVT ──
    { name: "AU College of Engineering", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Engineering", type: "State Govt", fees: "₹70K/year", exam: "AP EAPCET", rating: 4, access: "⚠️ AP Domicile" },
    { name: "JNTU Kakinada", location: "Kakinada", district: "Kakinada", state: "AP", category: "Engineering", type: "State Govt", fees: "₹75K/year", exam: "AP EAPCET", rating: 4, access: "⚠️ AP Domicile" },
    { name: "JNTUA Anantapur", location: "Anantapur", district: "Anantapur", state: "AP", category: "Engineering", type: "State Govt", fees: "₹70K/year", exam: "AP EAPCET", rating: 4, access: "⚠️ AP Domicile" },
    { name: "SV University Engineering", location: "Tirupati", district: "Tirupati", state: "AP", category: "Engineering", type: "State Govt", fees: "₹60K/year", exam: "AP EAPCET", rating: 4, access: "⚠️ AP Domicile" },
    { name: "Nagarjuna University Engg", location: "Guntur", district: "Guntur", state: "AP", category: "Engineering", type: "State Govt", fees: "₹65K/year", exam: "AP EAPCET", rating: 3, access: "⚠️ AP Domicile" },
    { name: "Andhra University Engg", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Engineering", type: "State Govt", fees: "₹55K/year", exam: "AP EAPCET", rating: 4, access: "⚠️ AP Domicile" },
    // ── AP ENGINEERING PRIVATE ──
    { name: "SVEC", location: "Tirupati", district: "Tirupati", state: "AP", category: "Engineering", type: "Private", fees: "₹1.2L/year", exam: "AP EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Raghu Engineering College", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Engineering", type: "Private", fees: "₹90K/year", exam: "AP EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Aditya Engineering College", location: "Surampalem, East Godavari", district: "East Godavari", state: "AP", category: "Engineering", type: "Private", fees: "₹85K/year", exam: "AP EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Sree Vidyanikethan Engg", location: "Tirupati", district: "Tirupati", state: "AP", category: "Engineering", type: "Private", fees: "₹95K/year", exam: "AP EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Prasad V Potluri Siddhartha", location: "Vijayawada", district: "Krishna", state: "AP", category: "Engineering", type: "Private", fees: "₹1L/year", exam: "AP EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Vasireddy Venkatadri Tech", location: "Guntur", district: "Guntur", state: "AP", category: "Engineering", type: "Private", fees: "₹1L/year", exam: "AP EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Chirala Engineering College", location: "Chirala, Prakasam", district: "Prakasam", state: "AP", category: "Engineering", type: "Private", fees: "₹80K/year", exam: "AP EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Lendi Institute of Engg", location: "Rajam, Srikakulam", district: "Srikakulam", state: "AP", category: "Engineering", type: "Private", fees: "₹80K/year", exam: "AP EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    // ── AP RGUKT ──
    { name: "RGUKT Nuzvid", location: "Nuzvid, Krishna", district: "Krishna", state: "AP", category: "RGUKT", type: "FREE Residential", fees: "Free", exam: "10th Marks Only", rating: 5, access: "⚠️ AP Domicile" },
    { name: "RGUKT Ongole", location: "Ongole, Prakasam", district: "Prakasam", state: "AP", category: "RGUKT", type: "FREE Residential", fees: "Free", exam: "10th Marks Only", rating: 5, access: "⚠️ AP Domicile" },
    { name: "RGUKT Srikakulam", location: "Etcherla, Srikakulam", district: "Srikakulam", state: "AP", category: "RGUKT", type: "FREE Residential", fees: "Free", exam: "10th Marks Only", rating: 5, access: "⚠️ AP Domicile" },
    { name: "RGUKT RK Valley", location: "Vempalli, Kadapa", district: "Kadapa", state: "AP", category: "RGUKT", type: "FREE Residential", fees: "Free", exam: "10th Marks Only", rating: 5, access: "⚠️ AP Domicile" },
    // ── AP MEDICAL ──
    { name: "AIIMS Mangalagiri", location: "Guntur", district: "Guntur", state: "AP", category: "Medical", type: "Central Govt", fees: "₹5K/year", exam: "NEET", rating: 5, access: "🌍 Open to All" },
    { name: "Andhra Medical College", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", rating: 5, access: "⚠️ AP Domicile" },
    { name: "Guntur Medical College", location: "Guntur", district: "Guntur", state: "AP", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", rating: 5, access: "⚠️ AP Domicile" },
    { name: "Kurnool Medical College", location: "Kurnool", district: "Kurnool", state: "AP", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", rating: 5, access: "⚠️ AP Domicile" },
    { name: "Rangaraya Medical College", location: "Kakinada", district: "Kakinada", state: "AP", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", rating: 4, access: "⚠️ AP Domicile" },
    { name: "SVMC Tirupati", location: "Tirupati", district: "Tirupati", state: "AP", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", rating: 4, access: "⚠️ AP Domicile" },
    { name: "Narayana Medical College", location: "Nellore", district: "Nellore", state: "AP", category: "Medical", type: "Private", fees: "₹11L/year", exam: "NEET", rating: 4, access: "🌍 Open to All" },
    { name: "NRI Medical College", location: "Guntur", district: "Guntur", state: "AP", category: "Medical", type: "Private", fees: "₹10L/year", exam: "NEET", rating: 4, access: "🌍 Open to All" },
    { name: "Dr PSIMS Vijayawada", location: "Vijayawada", district: "Krishna", state: "AP", category: "Medical", type: "Private", fees: "₹9L/year", exam: "NEET", rating: 3, access: "🌍 Open to All" },
    // ── AP LAW ──
    { name: "AU Law College", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Law", type: "State Govt", fees: "₹15K/year", exam: "CLAT", rating: 4, access: "🏠 AP/TS Preferred" },
    { name: "SV Law College", location: "Tirupati", district: "Tirupati", state: "AP", category: "Law", type: "State Govt", fees: "₹15K/year", exam: "CLAT", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Nagarjuna Law College", location: "Guntur", district: "Guntur", state: "AP", category: "Law", type: "State Govt", fees: "₹12K/year", exam: "CLAT", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Krishna University Law", location: "Machilipatnam", district: "Krishna", state: "AP", category: "Law", type: "State Govt", fees: "₹12K/year", exam: "CLAT", rating: 3, access: "🏠 AP/TS Preferred" },
    // ── AP COMMERCE ──
    { name: "AU Commerce Department", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Commerce", type: "State Govt", fees: "₹12K/year", exam: "CUET", rating: 4, access: "🏠 AP/TS Preferred" },
    { name: "SV University Commerce", location: "Tirupati", district: "Tirupati", state: "AP", category: "Commerce", type: "State Govt", fees: "₹10K/year", exam: "CUET", rating: 4, access: "🏠 AP/TS Preferred" },
    { name: "Nagarjuna University Commerce", location: "Guntur", district: "Guntur", state: "AP", category: "Commerce", type: "State Govt", fees: "₹10K/year", exam: "CUET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Krishna University Commerce", location: "Machilipatnam", district: "Krishna", state: "AP", category: "Commerce", type: "State Govt", fees: "₹8K/year", exam: "CUET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Adikavi Nannaya University", location: "Rajahmundry", district: "East Godavari", state: "AP", category: "Commerce", type: "State Govt", fees: "₹8K/year", exam: "CUET", rating: 3, access: "🏠 AP/TS Preferred" },
    // ── AP POLYTECHNIC ──
    { name: "Govt Polytechnic Visakhapatnam", location: "Visakhapatnam", district: "Visakhapatnam", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", rating: 4, access: "⚠️ AP Domicile" },
    { name: "Govt Polytechnic Kakinada", location: "Kakinada", district: "Kakinada", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", rating: 4, access: "⚠️ AP Domicile" },
    { name: "Govt Polytechnic Guntur", location: "Guntur", district: "Guntur", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", rating: 3, access: "⚠️ AP Domicile" },
    { name: "Govt Polytechnic Tirupati", location: "Tirupati", district: "Tirupati", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", rating: 3, access: "⚠️ AP Domicile" },
    { name: "Govt Polytechnic Kurnool", location: "Kurnool", district: "Kurnool", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", rating: 3, access: "⚠️ AP Domicile" },
    { name: "Govt Polytechnic Nellore", location: "Nellore", district: "Nellore", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", rating: 3, access: "⚠️ AP Domicile" },
    { name: "Govt Polytechnic Kadapa", location: "Kadapa", district: "Kadapa", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", rating: 3, access: "⚠️ AP Domicile" },
    { name: "Govt Polytechnic Anantapur", location: "Anantapur", district: "Anantapur", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", rating: 3, access: "⚠️ AP Domicile" },
    { name: "Govt Polytechnic Srikakulam", location: "Srikakulam", district: "Srikakulam", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", rating: 3, access: "⚠️ AP Domicile" },
    { name: "Govt Polytechnic Vizianagaram", location: "Vizianagaram", district: "Vizianagaram", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", rating: 3, access: "⚠️ AP Domicile" },
    { name: "Govt Polytechnic Eluru", location: "Eluru, West Godavari", district: "West Godavari", state: "AP", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "AP POLYCET", rating: 3, access: "⚠️ AP Domicile" },
    // ── TS ENGINEERING CENTRAL ──
    { name: "IIT Hyderabad", location: "Sangareddy", district: "Sangareddy", state: "TS", category: "Engineering", type: "Central Govt", fees: "₹2.5L/year", exam: "JEE Advanced", rating: 5, access: "🌍 Open to All" },
    { name: "NIT Warangal", location: "Warangal", district: "Warangal", state: "TS", category: "Engineering", type: "Central Govt", fees: "₹1.5L/year", exam: "JEE Mains", rating: 5, access: "🌍 Open to All" },
    { name: "BITS Hyderabad", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Deemed", fees: "₹4.5L/year", exam: "BITSAT", rating: 5, access: "🌍 Open to All" },
    // ── TS ENGINEERING STATE GOVT ──
    { name: "JNTU Hyderabad", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "State Govt", fees: "₹80K/year", exam: "TS EAPCET", rating: 4, access: "⚠️ TS Domicile" },
    { name: "Osmania University Engg", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "State Govt", fees: "₹70K/year", exam: "TS EAPCET", rating: 4, access: "⚠️ TS Domicile" },
    { name: "Kakatiya University Engg", location: "Warangal", district: "Warangal", state: "TS", category: "Engineering", type: "State Govt", fees: "₹65K/year", exam: "TS EAPCET", rating: 4, access: "⚠️ TS Domicile" },
    { name: "University College of Engg Kothagudem", location: "Kothagudem", district: "Bhadradri Kothagudem", state: "TS", category: "Engineering", type: "State Govt", fees: "₹60K/year", exam: "TS EAPCET", rating: 3, access: "⚠️ TS Domicile" },
    // ── TS ENGINEERING PRIVATE ──
    { name: "Chaitanya Bharathi Institute", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Private", fees: "₹1.2L/year", exam: "TS EAPCET", rating: 4, access: "🏠 AP/TS Preferred" },
    { name: "Vardhaman College of Engg", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Private", fees: "₹1L/year", exam: "TS EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Malla Reddy Engineering", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Private", fees: "₹1L/year", exam: "TS EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "SR Engineering College", location: "Warangal", district: "Warangal", state: "TS", category: "Engineering", type: "Private", fees: "₹90K/year", exam: "TS EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Sreenidhi Institute", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Private", fees: "₹1.3L/year", exam: "TS EAPCET", rating: 4, access: "🏠 AP/TS Preferred" },
    { name: "CMR College of Engineering", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Engineering", type: "Private", fees: "₹1L/year", exam: "TS EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Mahatma Gandhi Institute", location: "Nalgonda", district: "Nalgonda", state: "TS", category: "Engineering", type: "Private", fees: "₹85K/year", exam: "TS EAPCET", rating: 3, access: "🏠 AP/TS Preferred" },
    // ── TS MEDICAL ──
    { name: "Osmania Medical College", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Medical", type: "State Govt", fees: "₹30K/year", exam: "NEET", rating: 5, access: "⚠️ TS Domicile" },
    { name: "Gandhi Medical College", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Medical", type: "State Govt", fees: "₹30K/year", exam: "NEET", rating: 5, access: "⚠️ TS Domicile" },
    { name: "Kakatiya Medical College", location: "Warangal", district: "Warangal", state: "TS", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", rating: 4, access: "⚠️ TS Domicile" },
    { name: "Govt Medical College Nizamabad", location: "Nizamabad", district: "Nizamabad", state: "TS", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", rating: 4, access: "⚠️ TS Domicile" },
    { name: "Govt Medical College Nalgonda", location: "Nalgonda", district: "Nalgonda", state: "TS", category: "Medical", type: "State Govt", fees: "₹25K/year", exam: "NEET", rating: 4, access: "⚠️ TS Domicile" },
    { name: "KIMS Hyderabad", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Medical", type: "Private", fees: "₹12L/year", exam: "NEET", rating: 4, access: "🌍 Open to All" },
    { name: "Apollo Medical College", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Medical", type: "Private", fees: "₹14L/year", exam: "NEET", rating: 4, access: "🌍 Open to All" },
    { name: "Yashoda Medical College", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Medical", type: "Private", fees: "₹11L/year", exam: "NEET", rating: 3, access: "🌍 Open to All" },
    // ── TS LAW ──
    { name: "NALSAR University", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Law", type: "National", fees: "₹1.5L/year", exam: "CLAT", rating: 5, access: "🌍 Open to All" },
    { name: "OU College of Law", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Law", type: "State Govt", fees: "₹20K/year", exam: "CLAT", rating: 4, access: "🏠 AP/TS Preferred" },
    { name: "Kakatiya University Law", location: "Warangal", district: "Warangal", state: "TS", category: "Law", type: "State Govt", fees: "₹15K/year", exam: "CLAT", rating: 3, access: "🏠 AP/TS Preferred" },
    // ── TS COMMERCE ──
    { name: "Osmania University Commerce", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Commerce", type: "State Govt", fees: "₹10K/year", exam: "CUET", rating: 4, access: "🏠 AP/TS Preferred" },
    { name: "Kakatiya University Commerce", location: "Warangal", district: "Warangal", state: "TS", category: "Commerce", type: "State Govt", fees: "₹8K/year", exam: "CUET", rating: 3, access: "🏠 AP/TS Preferred" },
    { name: "Mahatma Gandhi University Commerce", location: "Nalgonda", district: "Nalgonda", state: "TS", category: "Commerce", type: "State Govt", fees: "₹8K/year", exam: "CUET", rating: 3, access: "🏠 AP/TS Preferred" },
    // ── TS POLYTECHNIC ──
    { name: "Govt Polytechnic Hyderabad", location: "Hyderabad", district: "Hyderabad", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹15K/year", exam: "TS POLYCET", rating: 4, access: "⚠️ TS Domicile" },
    { name: "Govt Polytechnic Warangal", location: "Warangal", district: "Warangal", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹15K/year", exam: "TS POLYCET", rating: 4, access: "⚠️ TS Domicile" },
    { name: "Govt Polytechnic Nizamabad", location: "Nizamabad", district: "Nizamabad", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", rating: 3, access: "⚠️ TS Domicile" },
    { name: "Govt Polytechnic Karimnagar", location: "Karimnagar", district: "Karimnagar", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", rating: 3, access: "⚠️ TS Domicile" },
    { name: "Govt Polytechnic Khammam", location: "Khammam", district: "Khammam", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", rating: 3, access: "⚠️ TS Domicile" },
    { name: "Govt Polytechnic Nalgonda", location: "Nalgonda", district: "Nalgonda", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", rating: 3, access: "⚠️ TS Domicile" },
    { name: "Govt Polytechnic Mahbubnagar", location: "Mahbubnagar", district: "Mahbubnagar", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", rating: 3, access: "⚠️ TS Domicile" },
    { name: "Govt Polytechnic Adilabad", location: "Adilabad", district: "Adilabad", state: "TS", category: "Polytechnic", type: "Govt", fees: "₹12K/year", exam: "TS POLYCET", rating: 3, access: "⚠️ TS Domicile" },
  ]

  const states = ["All", "AP", "TS"]
  const categories = ["All", "Engineering", "Medical", "Law", "Commerce", "Polytechnic", "RGUKT"]

  const apDistricts = ["All", "Visakhapatnam", "Vizianagaram", "Srikakulam", "East Godavari", "West Godavari", "Krishna", "Guntur", "Prakasam", "Nellore", "Kurnool", "Kadapa", "Anantapur", "Tirupati", "Kakinada"]
  const tsDistricts = ["All", "Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Nalgonda", "Mahbubnagar", "Adilabad", "Sangareddy", "Bhadradri Kothagudem"]

  const districts = selectedState === "AP" ? apDistricts : selectedState === "TS" ? tsDistricts : ["All"]

  const filtered = colleges.filter(c => {
    if (selectedState !== "All" && c.state !== selectedState) return false
    if (selectedDistrict !== "All" && c.district !== selectedDistrict) return false
    if (selectedCategory !== "All" && c.category !== selectedCategory) return false
    return true
  })

  const accessColor = (access) => {
    if (access.includes("Open")) return "text-green-400"
    if (access.includes("Preferred")) return "text-yellow-400"
    return "text-red-400"
  }

  const categoryColor = {
    Engineering: "border-blue-500",
    Medical: "border-green-500",
    Law: "border-orange-500",
    Commerce: "border-purple-500",
    Polytechnic: "border-red-500",
    RGUKT: "border-yellow-500",
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-yellow-400">⭐ Guidestar</a>
        <div className="flex gap-6 text-sm">
          <a href="/careers" className="text-gray-300 hover:text-yellow-400">Careers</a>
          <a href="/exams" className="text-gray-300 hover:text-yellow-400">Exams</a>
          <a href="/ai-guide" className="text-yellow-400 font-semibold">AI Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
          <div>
            <h2 className="text-4xl font-bold mb-2">Colleges in AP & Telangana</h2>
            <p className="text-gray-400">మీ జిల్లాలో కళాశాలలు — filter చేసి చూడండి</p>
          </div>
          <p className="text-gray-500 text-xs mt-4 md:mt-0" suppressHydrationWarning>
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="bg-gray-800/50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
          <p className="text-gray-300 text-sm font-semibold flex items-center gap-2 mb-1">
            <span>ℹ️</span> Important Notice
          </p>
          <p className="text-gray-400 text-xs">
            College fees, admission processes, rankings, and eligibility criteria can change annually. 
            The data provided here is for general guidance. We strongly encourage you to verify all details from the official college websites.
          </p>
        </div>

        {/* Access Legend */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <span className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-green-400">🌍 Open to All States</span>
          <span className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-yellow-400">🏠 AP/TS Students Preferred</span>
          <span className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-red-400">⚠️ State Domicile Required</span>
        </div>

        {/* RGUKT Banner */}
        <div className="bg-yellow-900 border border-yellow-500 rounded-xl p-4 mb-6">
          <p className="text-yellow-400 font-bold">🌟 RGUKT — FREE Engineering After 10th for AP Students!</p>
          <p className="text-yellow-200 text-sm mt-1">6-year integrated B.Tech. No intermediate needed. Fully residential with food included. Based on 10th marks only.</p>
        </div>

        {/* Filters */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-6">
          <p className="text-gray-400 text-sm mb-3">Filter colleges:</p>
          <div className="flex gap-4 flex-wrap">
            {/* State filter */}
            <div>
              <p className="text-xs text-gray-500 mb-1">State</p>
              <div className="flex gap-2">
                {states.map(s => (
                  <button key={s} onClick={() => { setSelectedState(s); setSelectedDistrict('All') }}
                    className={`px-3 py-1 rounded text-sm ${selectedState === s ? 'bg-yellow-400 text-black font-bold' : 'bg-gray-800 text-gray-300'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Category filter */}
            <div>
              <p className="text-xs text-gray-500 mb-1">Category</p>
              <div className="flex gap-2 flex-wrap">
                {categories.map(c => (
                  <button key={c} onClick={() => setSelectedCategory(c)}
                    className={`px-3 py-1 rounded text-sm ${selectedCategory === c ? 'bg-yellow-400 text-black font-bold' : 'bg-gray-800 text-gray-300'}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* District filter */}
            {selectedState !== 'All' && (
              <div>
                <p className="text-xs text-gray-500 mb-1">District</p>
                <div className="flex gap-2 flex-wrap">
                  {districts.map(d => (
                    <button key={d} onClick={() => setSelectedDistrict(d)}
                      className={`px-3 py-1 rounded text-sm ${selectedDistrict === d ? 'bg-yellow-400 text-black font-bold' : 'bg-gray-800 text-gray-300'}`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-400 text-sm mb-4">{filtered.length} colleges found</p>

        {/* College cards */}
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((college, i) => (
            <div key={i} className={`bg-gray-900 border-l-4 ${categoryColor[college.category] || 'border-gray-500'} rounded-xl p-4`}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="text-white font-semibold">{college.name}</h4>
                  <p className="text-gray-400 text-sm">{college.location}, {college.state}</p>
                  <p className={`text-xs mt-1 ${accessColor(college.access)}`}>{college.access}</p>
                </div>
                <div className="text-right ml-2">
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">{college.type}</span>
                  <p className="text-xs text-gray-500 mt-1">{college.category}</p>
                </div>
              </div>
              <div className="flex gap-4 mt-3">
                <div>
                  <p className="text-gray-500 text-xs">Fees</p>
                  <p className="text-yellow-400 text-sm font-bold">{college.fees}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Exam</p>
                  <p className="text-white text-sm">{college.exam}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Rating</p>
                  <p className="text-yellow-400 text-sm">{'★'.repeat(college.rating)}{'☆'.repeat(5 - college.rating)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No colleges found for selected filters</p>
            <p className="text-sm mt-2">Try changing state or category</p>
          </div>
        )}
      </div>
    </main>
  )
}