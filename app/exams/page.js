export default function Exams() {
  const exams = [
    {
      name: "AP EAPCET",
      fullName: "AP Engineering Agriculture & Pharmacy Common Entrance Test",
      category: "Engineering",
      emoji: "⚙️",
      color: "border-blue-500",
      accent: "text-blue-400",
      bg: "bg-blue-900",
      date: "May 2026",
      applyDate: "March 2026",
      eligibility: "MPC students, 45% in Intermediate",
      official: "https://cets.apsche.ap.gov.in",
      forStream: ["MPC"],
      desc: "Main entrance for Engineering colleges in Andhra Pradesh"
    },
    {
      name: "TS EAPCET",
      fullName: "Telangana Engineering Agriculture & Pharmacy Common Entrance Test",
      category: "Engineering",
      emoji: "⚙️",
      color: "border-blue-500",
      accent: "text-blue-400",
      bg: "bg-blue-900",
      date: "May 2026",
      applyDate: "March 2026",
      eligibility: "MPC students, 45% in Intermediate",
      official: "https://eapcet.tsche.ac.in",
      forStream: ["MPC"],
      desc: "Main entrance for Engineering colleges in Telangana"
    },
    {
      name: "NEET UG",
      fullName: "National Eligibility cum Entrance Test",
      category: "Medical",
      emoji: "🏥",
      color: "border-green-500",
      accent: "text-green-400",
      bg: "bg-green-900",
      date: "May 2026",
      applyDate: "February 2026",
      eligibility: "BiPC students, 50% in Intermediate",
      official: "https://neet.nta.nic.in",
      forStream: ["BiPC"],
      desc: "Only entrance for MBBS, BDS, BAMS across India"
    },
    {
      name: "JEE Mains",
      fullName: "Joint Entrance Examination Mains",
      category: "Engineering",
      emoji: "🔬",
      color: "border-cyan-500",
      accent: "text-cyan-400",
      bg: "bg-cyan-900",
      date: "January & April 2026",
      applyDate: "November 2025",
      eligibility: "MPC students, 75% in Intermediate",
      official: "https://jeemain.nta.nic.in",
      forStream: ["MPC"],
      desc: "National entrance for NITs, IIITs and central colleges"
    },
    {
      name: "JEE Advanced",
      fullName: "Joint Entrance Examination Advanced",
      category: "Engineering",
      emoji: "🏆",
      color: "border-yellow-500",
      accent: "text-yellow-400",
      bg: "bg-yellow-900",
      date: "May 2026",
      applyDate: "April 2026",
      eligibility: "Top 2.5 lakh JEE Mains qualifiers",
      official: "https://jeeadv.ac.in",
      forStream: ["MPC"],
      desc: "Entrance for IITs — most prestigious engineering exam in India"
    },
    {
      name: "VITEEE",
      fullName: "VIT Engineering Entrance Examination",
      category: "Engineering",
      emoji: "🎓",
      color: "border-purple-500",
      accent: "text-purple-400",
      bg: "bg-purple-900",
      date: "April 2026",
      applyDate: "February 2026",
      eligibility: "MPC students, 60% in Intermediate",
      official: "https://viteee.vit.ac.in",
      forStream: ["MPC"],
      desc: "Entrance for VIT University — top private engineering college"
    },
    {
      name: "CLAT",
      fullName: "Common Law Admission Test",
      category: "Law",
      emoji: "⚖️",
      color: "border-orange-500",
      accent: "text-orange-400",
      bg: "bg-orange-900",
      date: "December 2025",
      applyDate: "October 2025",
      eligibility: "Any stream, 45% in Intermediate",
      official: "https://consortiumofnlus.ac.in",
      forStream: ["CEC", "HEC", "MPC", "BiPC"],
      desc: "Entrance for National Law Universities across India"
    },
    {
      name: "CA Foundation",
      fullName: "Chartered Accountancy Foundation",
      category: "Commerce",
      emoji: "💰",
      color: "border-emerald-500",
      accent: "text-emerald-400",
      bg: "bg-emerald-900",
      date: "June & December 2026",
      applyDate: "March 2026",
      eligibility: "Commerce students, passed 10+2",
      official: "https://icai.org",
      forStream: ["CEC", "MEC"],
      desc: "First step to become a Chartered Accountant"
    },
    {
      name: "AP POLYCET",
      fullName: "AP Polytechnic Common Entrance Test",
      category: "Polytechnic",
      emoji: "🔧",
      color: "border-red-500",
      accent: "text-red-400",
      bg: "bg-red-900",
      date: "April 2026",
      applyDate: "February 2026",
      eligibility: "10th pass students",
      official: "https://polycetap.nic.in",
      forStream: ["Vocational", "All"],
      desc: "Entrance for Polytechnic diploma courses in AP — directly after 10th"
    },
    {
      name: "NATA",
      fullName: "National Aptitude Test in Architecture",
      category: "Architecture",
      emoji: "🏛️",
      color: "border-pink-500",
      accent: "text-pink-400",
      bg: "bg-pink-900",
      date: "April 2026",
      applyDate: "February 2026",
      eligibility: "MPC students, 50% in Intermediate",
      official: "https://nata.in",
      forStream: ["MPC"],
      desc: "Entrance for B.Arch (Architecture) degree across India"
    },
  ]

  const categories = ["All", "Engineering", "Medical", "Law", "Commerce", "Polytechnic", "Architecture"]

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-yellow-400">⭐ Guidestar</a>
        <div className="flex gap-6 text-sm">
          <a href="/careers" className="text-gray-300 hover:text-yellow-400">Careers</a>
          <a href="/colleges" className="text-gray-300 hover:text-yellow-400">Colleges</a>
          <a href="/ai-guide" className="text-yellow-400 font-semibold">AI Guide</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-2">Exam Notifications</h2>
        <p className="text-gray-400 mb-8">పరీక్షల సమాచారం — తేదీలు, అర్హతలు, దరఖాస్తు లింక్‌లు</p>

        <div className="grid gap-5">
          {exams.map((exam, i) => (
            <div key={i} className={`bg-gray-900 border-l-4 ${exam.color} rounded-xl p-6`}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">{exam.emoji}</span>
                    <h3 className={`text-xl font-bold ${exam.accent}`}>{exam.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${exam.bg} ${exam.accent}`}>{exam.category}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{exam.fullName}</p>
                  <p className="text-white text-sm">{exam.desc}</p>
                  
                  <div className="flex gap-6 mt-3">
                    <div>
                      <p className="text-gray-500 text-xs">Exam Date</p>
                      <p className="text-white text-sm font-semibold">{exam.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Apply Before</p>
                      <p className="text-white text-sm font-semibold">{exam.applyDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Eligibility</p>
                      <p className="text-white text-sm font-semibold">{exam.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">For Streams</p>
                      <p className={`text-sm font-semibold ${exam.accent}`}>{exam.forStream.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={exam.official} 
                  target="_blank"
                  className={`ml-6 px-4 py-2 rounded-lg border ${exam.color} ${exam.accent} text-sm font-semibold hover:opacity-80 transition whitespace-nowrap`}
                >
                  Official Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}