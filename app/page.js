import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      
      {/* Navbar */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-yellow-400">⭐ Guidestar</h1>
          <p className="text-xs text-gray-400">మీ కెరీర్ గైడ్ | Your Career Guide</p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/careers" className="text-gray-300 hover:text-yellow-400">Careers</Link>
          <Link href="/exams" className="text-gray-300 hover:text-yellow-400">Exams</Link>
          <Link href="/colleges" className="text-gray-300 hover:text-yellow-400">Colleges</Link>
          <Link href="/ai-guide" className="text-yellow-400 font-semibold">AI Guide</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <p className="text-yellow-400 text-sm font-semibold mb-3">10వ తరగతి తర్వాత ఏమి చేయాలి?</p>
        <h2 className="text-5xl font-bold mb-4">Find Your Perfect <span className="text-yellow-400">Career Path</span></h2>
        <p className="text-gray-400 text-lg mb-8">Helping students and parents in Andhra Pradesh & Telangana choose the right course, college and career after 10th class.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/ai-guide" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
            Get AI Guidance
          </Link>
          <Link href="/careers" className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-yellow-400 transition">
            Explore Careers
          </Link>
        </div>
      </section>

      {/* 4 Quick Cards */}
      <section className="px-6 py-8 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: '🎯', title: 'Career Paths', desc: 'MPC, BiPC, CEC, MEC & more', href: '/careers' },
          { icon: '📝', title: 'Exam Alerts', desc: 'EAPCET, NEET, JEE dates', href: '/exams' },
          { icon: '🏫', title: 'Top Colleges', desc: 'Best colleges in AP & TS', href: '/colleges' },
          { icon: '🤖', title: 'AI Guide', desc: 'Personalized suggestions', href: '/ai-guide' },
        ].map((card, i) => (
          <Link key={i} href={card.href}>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-yellow-400 transition cursor-pointer h-full">
              <span className="text-3xl">{card.icon}</span>
              <h3 className="text-white font-semibold mt-3">{card.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{card.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm mt-12 border-t border-gray-800">
        <p>Guidestar — Built for students of AP & Telangana 🌟</p>
      </footer>

    </main>
  )
}