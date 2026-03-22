export default function About() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-yellow-400">⭐ Guidestar</a>
        <div className="flex gap-6 text-sm">
          <a href="/careers" className="text-gray-300 hover:text-yellow-400">Careers</a>
          <a href="/exams" className="text-gray-300 hover:text-yellow-400">Exams</a>
          <a href="/colleges" className="text-gray-300 hover:text-yellow-400">Colleges</a>
          <a href="/ai-guide" className="text-yellow-400 font-semibold">AI Guide</a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-2">About Guidestar</h2>
        <p className="text-gray-400 mb-8">గురించి — మా లక్ష్యం</p>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-yellow-400 font-bold text-xl mb-3">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed">Guidestar was built to help students and parents in Andhra Pradesh and Telangana make informed decisions about education and career after 10th class. Many students from rural areas and small towns don't have access to proper career counseling. Guidestar bridges that gap — for free.</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-yellow-400 font-bold text-xl mb-3">What We Offer</h3>
          <div className="grid gap-3">
            {[
              { icon: "🎯", title: "Career Paths", desc: "Detailed information about all streams — MPC, BiPC, CEC, MEC, Vocational and Arts" },
              { icon: "📝", title: "Exam Notifications", desc: "All important exam dates, eligibility and official links in one place" },
              { icon: "🏫", title: "College Directory", desc: "Comprehensive list of colleges in AP and TS with fees, exams and access information" },
              { icon: "🤖", title: "AI Career Guide", desc: "Personalized career guidance powered by AI based on your interests and budget" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-yellow-400 font-bold text-xl mb-3">Built For</h3>
          <p className="text-gray-300 leading-relaxed">Students who have completed 10th class in AP and Telangana. Parents who want to understand the education system. Teachers and counselors who guide students.</p>
        </div>

        <div className="bg-yellow-900 border border-yellow-500 rounded-xl p-6">
          <h3 className="text-yellow-400 font-bold text-xl mb-2">Community Service Project</h3>
          <p className="text-yellow-200 text-sm leading-relaxed">Guidestar was built as a community service initiative by students of NBKR Institute of Science and Technology, Batch-6 AID-A. Our goal is to make quality career guidance accessible to every student in AP and Telangana — regardless of their background or location.</p>
        </div>
      </div>
    </main>
  )
}