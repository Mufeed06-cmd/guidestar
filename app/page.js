'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/LanguageContext'

export default function Home() {
  const { t } = useLang()
  const h = t.home

  const cards = [
    { icon: '🎯', title: h.card1Title, desc: h.card1Desc, href: '/careers' },
    { icon: '📝', title: h.card2Title, desc: h.card2Desc, href: '/exams' },
    { icon: '🏫', title: h.card3Title, desc: h.card3Desc, href: '/colleges' },
    { icon: '🤖', title: h.card4Title, desc: h.card4Desc, href: '/ai-guide' },
  ]

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 flex flex-col font-sans">
      <Navbar />

      <section className="relative overflow-hidden px-6 py-24 text-center max-w-4xl mx-auto w-full flex-grow flex flex-col justify-center">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none -z-10" />
        
        <p className="text-cyan-400 text-sm font-semibold mb-3 tracking-wider uppercase">{h.heroLabel}</p>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
          {h.heroTitle} <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{h.heroHighlight}</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{h.heroDesc}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/ai-guide" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-cyan-500/20 hover:from-blue-600 hover:to-cyan-600 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-in-out text-center">
            {h.ctaAI}
          </Link>
          <Link href="/careers" className="w-full sm:w-auto border border-slate-700 text-slate-200 hover:text-cyan-400 hover:border-cyan-400 font-semibold px-8 py-4 rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-in-out text-center">
            {h.ctaExplore}
          </Link>
        </div>
      </section>

      <section className="px-6 py-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {cards.map((card, i) => (
          <Link key={i} href={card.href} className="group">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-in-out cursor-pointer h-full flex flex-col justify-between">
              <div>
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-200 origin-left">{card.icon}</span>
                <h3 className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-200">{card.title}</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{card.desc}</p>
              </div>
              <span className="text-xs text-blue-400 font-semibold mt-4 block group-hover:translate-x-1 transition-transform duration-200">Learn more →</span>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  )
}
