'use client'
import Navbar from '@/components/Navbar'
import { useLang } from '@/lib/LanguageContext'

const careersData = [
  {
    stream: "MPC",
    fullName: "Maths, Physics, Chemistry",
    emoji: "⚙️",
    color: "border-blue-500",
    accent: "text-blue-400",
    bg: "bg-blue-900",
    desc: { en: "Best for students interested in technology and engineering", te: "సాంకేతికత మరియు ఇంజినీరింగ్‌పై ఆసక్తి ఉన్న విద్యార్థులకు అత్యుత్తమం" },
    telugu: "గణితం, భౌతికశాస్త్రం, రసాయనశాస్త్రం",
    note: "* Pilot salary depends heavily on experience; entry-level can be as low as ₹1.5 LPA during training bonds.",
    paths: [
      { job: "Software Engineer", course: "B.Tech CSE", salary: "₹4-25 LPA" },
      { job: "Mechanical Engineer", course: "B.Tech Mech", salary: "₹3-12 LPA" },
      { job: "Data Scientist", course: "B.Tech + ML", salary: "₹6-30 LPA" },
      { job: "Pilot", course: "Commercial Pilot License", salary: "₹1.5-40 LPA*" },
      { job: "Architect", course: "B.Arch", salary: "₹4-15 LPA" },
    ],
    exams: ["JEE Mains", "EAPCET", "BITSAT", "VITEEE"]
  },
  {
    stream: "BiPC",
    fullName: "Biology, Physics, Chemistry",
    emoji: "🧬",
    color: "border-green-500",
    accent: "text-green-400",
    bg: "bg-green-900",
    desc: { en: "Best for students interested in medicine and life sciences", te: "వైద్యం మరియు జీవ శాస్త్రాలపై ఆసక్తి ఉన్న విద్యార్థులకు అత్యుత్తమం" },
    telugu: "జీవశాస్త్రం, భౌతికశాస్త్రం, రసాయనశాస్త్రం",
    paths: [
      { job: "Doctor (MBBS)", course: "MBBS", salary: "₹8-50 LPA" },
      { job: "Pharmacist", course: "B.Pharmacy", salary: "₹3-10 LPA" },
      { job: "Nurse", course: "B.Sc Nursing", salary: "₹2-8 LPA" },
      { job: "Biotechnologist", course: "B.Sc Biotech", salary: "₹4-15 LPA" },
      { job: "Dentist", course: "BDS", salary: "₹5-20 LPA" },
    ],
    exams: ["NEET", "EAPCET", "AIIMS", "JIPMER"]
  },
  {
    stream: "CEC",
    fullName: "Commerce, Economics, Civics",
    emoji: "💼",
    color: "border-cyan-500",
    accent: "text-cyan-400",
    bg: "bg-cyan-950",
    desc: { en: "Best for students interested in business and finance", te: "వ్యాపారం మరియు ఆర్థికంపై ఆసక్తి ఉన్న విద్యార్థులకు అత్యుత్తమం" },
    telugu: "వాణిజ్యం, ఆర్థికశాస్త్రం, పౌరశాస్త్రం",
    paths: [
      { job: "Chartered Accountant", course: "CA", salary: "₹6-40 LPA" },
      { job: "Bank Manager", course: "B.Com + MBA", salary: "₹5-20 LPA" },
      { job: "Civil Servant (IAS)", course: "Any Degree + UPSC", salary: "₹8-20 LPA" },
      { job: "Tax Consultant", course: "B.Com", salary: "₹4-15 LPA" },
      { job: "Financial Analyst", course: "BBA Finance", salary: "₹5-18 LPA" },
    ],
    exams: ["CA Foundation", "CLAT", "IPMAT", "CUET"]
  },
  {
    stream: "MEC",
    fullName: "Maths, Economics, Commerce",
    emoji: "📈",
    color: "border-purple-500",
    accent: "text-purple-400",
    bg: "bg-purple-900",
    desc: { en: "Best for students interested in economics and management", te: "ఆర్థికశాస్త్రం మరియు మేనేజ్‌మెంట్‌పై ఆసక్తి ఉన్న విద్యార్థులకు అత్యుత్తమం" },
    telugu: "గణితం, ఆర్థికశాస్త్రం, వాణిజ్యం",
    paths: [
      { job: "Economist", course: "B.Sc Economics", salary: "₹5-20 LPA" },
      { job: "Business Analyst", course: "BBA + MBA", salary: "₹6-25 LPA" },
      { job: "Investment Banker", course: "B.Com + CFA", salary: "₹10-50 LPA" },
      { job: "Actuary", course: "B.Sc Maths + Actuarial", salary: "₹8-40 LPA" },
      { job: "Marketing Manager", course: "BBA Marketing", salary: "₹4-18 LPA" },
    ],
    exams: ["IPMAT", "CUET", "NMIMS", "SET"]
  },
  {
    stream: "Vocational",
    fullName: "ITI & Polytechnic",
    emoji: "🔧",
    color: "border-orange-500",
    accent: "text-orange-400",
    bg: "bg-orange-900",
    desc: { en: "Best for students who want quick jobs with practical skills", te: "ఆచరణాత్మక నైపుణ్యాలతో త్వరగా ఉద్యోగం కోరే విద్యార్థులకు అత్యుత్తమం" },
    telugu: "వృత్తి విద్య",
    paths: [
      { job: "Electrician", course: "ITI Electrical", salary: "₹2-8 LPA" },
      { job: "Mechanic", course: "ITI Automobile", salary: "₹2-6 LPA" },
      { job: "Civil Draftsman", course: "Polytechnic Civil", salary: "₹3-8 LPA" },
      { job: "Computer Operator", course: "ITI COPA", salary: "₹2-5 LPA" },
      { job: "Fashion Designer", course: "Polytechnic Fashion", salary: "₹3-10 LPA" },
    ],
    exams: ["AP POLYCET", "TS POLYCET", "ITI Admission"]
  },
  {
    stream: "HEC/Arts",
    fullName: "History, Economics, Civics",
    emoji: "🎨",
    color: "border-pink-500",
    accent: "text-pink-400",
    bg: "bg-pink-900",
    desc: { en: "Best for students interested in law, journalism and design", te: "చట్టం, జర్నలిజం మరియు డిజైన్‌పై ఆసక్తి ఉన్న విద్యార్థులకు అత్యుత్తమం" },
    telugu: "హ్యుమానిటీస్ మరియు ఆర్ట్స్",
    paths: [
      { job: "Lawyer", course: "BA LLB", salary: "₹4-30 LPA" },
      { job: "Journalist", course: "BA Mass Communication", salary: "₹3-12 LPA" },
      { job: "Teacher", course: "BA + B.Ed", salary: "₹3-8 LPA" },
      { job: "Graphic Designer", course: "BA Design", salary: "₹4-15 LPA" },
      { job: "Civil Services", course: "Any Degree + UPSC", salary: "₹8-20 LPA" },
    ],
    exams: ["CLAT", "CUET", "NIFT", "NID"]
  },
]

export default function Careers() {
  const { t, lang } = useLang()
  const c = t.careers

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 font-sans">
      <Navbar active="careers" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-2 tracking-tight">{c.title}</h2>
        <p className="text-slate-400 mb-8">{c.subtitle}</p>

        <div className="grid gap-6">
          {careersData.map((career, i) => (
            <div key={i} className={`bg-slate-800 border border-slate-700/60 border-l-4 ${career.color} rounded-xl p-6 hover:shadow-[0_0_15px_rgba(59,130,246,0.05)] hover:scale-[1.01] transition-all duration-200 ease-in-out`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-3xl">{career.emoji}</span>
                  <h3 className={`text-2xl font-bold mt-1 ${career.accent}`}>{career.stream}</h3>
                  <p className="text-slate-200 font-medium">{career.fullName}</p>
                  <p className="text-slate-500 text-sm">{career.telugu}</p>
                  <p className="text-slate-400 text-sm mt-1">{career.desc[lang]}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-xs mb-1">{c.keyExams}</p>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {career.exams.map((e, j) => (
                      <span key={j} className={`text-xs px-2 py-1 rounded ${career.bg} ${career.accent}`}>{e}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {career.paths.map((p, j) => (
                  <div key={j} className="bg-slate-700/40 border border-slate-700/50 rounded-lg p-3 hover:bg-slate-700/60 transition-colors duration-200">
                    <p className="text-slate-100 text-sm font-semibold">{p.job}</p>
                    <p className="text-slate-400 text-xs mt-1">{p.course}</p>
                    <p className={`text-xs font-bold mt-1 ${career.accent}`}>{p.salary}</p>
                  </div>
                ))}
              </div>
              {career.note && (
                <p className="text-slate-500 text-xs mt-3 italic">{career.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
