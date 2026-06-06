'use client'
import Navbar from '@/components/Navbar'
import { useLang } from '@/lib/LanguageContext'

const examsData = [
  { name: "AP EAPCET", fullName: "AP Engineering Agriculture & Pharmacy Common Entrance Test", category: "Engineering", emoji: "⚙️", color: "border-blue-500", accent: "text-blue-400", bg: "bg-blue-900", date: "May 2027", applyDate: "March 2027", eligibility: "MPC students, 45% in Intermediate", official: "https://cets.apsche.ap.gov.in", forStream: ["MPC"], desc: { en: "Main entrance for Engineering colleges in Andhra Pradesh", te: "ఆంధ్రప్రదేశ్‌లో ఇంజినీరింగ్ కళాశాలలకు ప్రధాన ప్రవేశం" } },
  { name: "TS EAPCET", fullName: "Telangana Engineering Agriculture & Pharmacy Common Entrance Test", category: "Engineering", emoji: "⚙️", color: "border-blue-500", accent: "text-blue-400", bg: "bg-blue-900", date: "May 2027", applyDate: "March 2027", eligibility: "MPC students, 45% in Intermediate", official: "https://eapcet.tsche.ac.in", forStream: ["MPC"], desc: { en: "Main entrance for Engineering colleges in Telangana", te: "తెలంగాణలో ఇంజినీరింగ్ కళాశాలలకు ప్రధాన ప్రవేశం" } },
  { name: "NEET UG", fullName: "National Eligibility cum Entrance Test", category: "Medical", emoji: "🏥", color: "border-green-500", accent: "text-green-400", bg: "bg-green-900", date: "May 2027", applyDate: "February 2027", eligibility: "BiPC students, 50% in Intermediate", official: "https://neet.nta.nic.in", forStream: ["BiPC"], desc: { en: "Only entrance for MBBS, BDS, BAMS across India", te: "భారతదేశంలో MBBS, BDS, BAMS కోసం ఏకైక ప్రవేశం" } },
  { name: "JEE Mains", fullName: "Joint Entrance Examination Mains", category: "Engineering", emoji: "🔬", color: "border-cyan-500", accent: "text-cyan-400", bg: "bg-cyan-900", date: "January & April 2027", applyDate: "November 2026", eligibility: "MPC students, 75% in Intermediate", official: "https://jeemain.nta.nic.in", forStream: ["MPC"], desc: { en: "National entrance for NITs, IIITs and central colleges", te: "NITs, IIITs మరియు కేంద్ర కళాశాలలకు జాతీయ ప్రవేశం" } },
  { name: "JEE Advanced", fullName: "Joint Entrance Examination Advanced", category: "Engineering", emoji: "🏆", color: "border-yellow-500", accent: "text-yellow-400", bg: "bg-yellow-900", date: "May 2027", applyDate: "April 2027", eligibility: "Top 2.5 lakh JEE Mains qualifiers", official: "https://jeeadv.ac.in", forStream: ["MPC"], desc: { en: "Entrance for IITs — most prestigious engineering exam in India", te: "IITలకు ప్రవేశం — భారతదేశంలో అత్యంత ప్రతిష్ఠాత్మక ఇంజినీరింగ్ పరీక్ష" } },
  { name: "VITEEE", fullName: "VIT Engineering Entrance Examination", category: "Engineering", emoji: "🎓", color: "border-purple-500", accent: "text-purple-400", bg: "bg-purple-900", date: "April 2027", applyDate: "February 2027", eligibility: "MPC students, 60% in Intermediate", official: "https://viteee.vit.ac.in", forStream: ["MPC"], desc: { en: "Entrance for VIT University — top private engineering college", te: "VIT విశ్వవిద్యాలయానికి ప్రవేశం — అగ్రశ్రేణి ప్రైవేట్ ఇంజినీరింగ్ కళాశాల" } },
  { name: "CLAT", fullName: "Common Law Admission Test", category: "Law", emoji: "⚖️", color: "border-orange-500", accent: "text-orange-400", bg: "bg-orange-900", date: "December 2026", applyDate: "October 2026", eligibility: "Any stream, 45% in Intermediate", official: "https://consortiumofnlus.ac.in", forStream: ["CEC", "HEC", "MPC", "BiPC"], desc: { en: "Entrance for National Law Universities across India", te: "భారతదేశంలో జాతీయ న్యాయ విశ్వవిద్యాలయాలకు ప్రవేశం" } },
  { name: "CA Foundation", fullName: "Chartered Accountancy Foundation", category: "Commerce", emoji: "💰", color: "border-emerald-500", accent: "text-emerald-400", bg: "bg-emerald-900", date: "June & December 2027", applyDate: "March 2027", eligibility: "Commerce students, passed 10+2", official: "https://icai.org", forStream: ["CEC", "MEC"], desc: { en: "First step to become a Chartered Accountant", te: "చార్టర్డ్ అకౌంటెంట్ అవడానికి మొదటి అడుగు" } },
  { name: "AP POLYCET", fullName: "AP Polytechnic Common Entrance Test", category: "Polytechnic", emoji: "🔧", color: "border-red-500", accent: "text-red-400", bg: "bg-red-900", date: "April 2027", applyDate: "February 2027", eligibility: "10th pass students", official: "https://polycetap.nic.in", forStream: ["Vocational", "All"], desc: { en: "Entrance for Polytechnic diploma courses in AP — directly after 10th", te: "AP లో పాలిటెక్నిక్ డిప్లొమా కోర్సులకు ప్రవేశం — 10వ తరగతి తర్వాత నేరుగా" } },
  { name: "TS POLYCET", fullName: "Telangana Polytechnic Common Entrance Test", category: "Polytechnic", emoji: "🔧", color: "border-red-500", accent: "text-red-400", bg: "bg-red-900", date: "April 2027", applyDate: "February 2027", eligibility: "10th pass students", official: "https://tspolycet.nic.in", forStream: ["Vocational", "All"], desc: { en: "Entrance for Polytechnic diploma courses in Telangana — directly after 10th", te: "తెలంగాణలో పాలిటెక్నిక్ డిప్లొమా కోర్సులకు ప్రవేశం — 10వ తరగతి తర్వాత నేరుగా" } },
  { name: "NATA", fullName: "National Aptitude Test in Architecture", category: "Architecture", emoji: "🏛️", color: "border-pink-500", accent: "text-pink-400", bg: "bg-pink-900", date: "April 2027", applyDate: "February 2027", eligibility: "MPC students, 50% in Intermediate", official: "https://nata.in", forStream: ["MPC"], desc: { en: "Entrance for B.Arch (Architecture) degree across India", te: "భారతదేశంలో B.Arch (నిర్మాణ శాస్త్రం) డిగ్రీకి ప్రవేశం" } },
]

export default function Exams() {
  const { t, lang } = useLang()
  const e = t.exams

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar active="exams" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
          <div>
            <h2 className="text-4xl font-bold mb-2">{e.title}</h2>
            <p className="text-gray-400">{e.subtitle}</p>
          </div>
          <p className="text-gray-500 text-xs mt-4 md:mt-0" suppressHydrationWarning>
            {e.lastUpdated}: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="bg-gray-800/50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
          <p className="text-gray-300 text-sm font-semibold flex items-center gap-2 mb-1">
            <span>ℹ️</span> {e.noticeTitle}
          </p>
          <p className="text-gray-400 text-xs">{e.noticeDesc}</p>
        </div>

        <div className="grid gap-5">
          {examsData.map((exam, i) => (
            <div key={i} className={`bg-gray-900 border-l-4 ${exam.color} rounded-xl p-6`}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">{exam.emoji}</span>
                    <h3 className={`text-xl font-bold ${exam.accent}`}>{exam.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${exam.bg} ${exam.accent}`}>{exam.category}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{exam.fullName}</p>
                  <p className="text-white text-sm">{exam.desc[lang]}</p>

                  <div className="flex gap-6 mt-3">
                    <div>
                      <p className="text-gray-500 text-xs">{e.examDate}</p>
                      <p className="text-white text-sm font-semibold">{exam.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{e.applyBefore}</p>
                      <p className="text-white text-sm font-semibold">{exam.applyDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{e.eligibility}</p>
                      <p className="text-white text-sm font-semibold">{exam.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{e.forStreams}</p>
                      <p className={`text-sm font-semibold ${exam.accent}`}>{exam.forStream.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={exam.official}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ml-6 px-4 py-2 rounded-lg border ${exam.color} ${exam.accent} text-sm font-semibold hover:opacity-80 transition whitespace-nowrap`}
                >
                  {e.officialSite}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
