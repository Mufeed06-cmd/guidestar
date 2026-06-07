'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/LanguageContext'

export default function Home() {
  const { t } = useLang()
  const h = t.home

  const cards = [
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.1" />
        </svg>
      ),
      title: h.card1Title,
      desc: h.card1Desc,
      href: '/careers'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: h.card2Title,
      desc: h.card2Desc,
      href: '/exams'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-violet-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" fill="currentColor" fillOpacity="0.1" />
        </svg>
      ),
      title: h.card3Title,
      desc: h.card3Desc,
      href: '/colleges'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" fill="currentColor" fillOpacity="0.1" />
        </svg>
      ),
      title: h.card4Title,
      desc: h.card4Desc,
      href: '/ai-guide'
    },
  ]

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 flex flex-col font-sans">
      <Navbar />

      <section className="relative overflow-hidden px-6 pt-20 pb-16 text-center max-w-4xl mx-auto w-full flex flex-col justify-center">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none -z-10" />
        
        <p className="text-cyan-400 text-sm font-semibold mb-3 tracking-wider uppercase">{h.heroLabel}</p>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
          {h.heroTitle} <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{h.heroHighlight}</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{h.heroDesc}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/ai-guide" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-cyan-500/20 hover:from-blue-600 hover:to-cyan-600 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-in-out text-center cursor-pointer">
            {h.ctaAI}
          </Link>
          <Link href="/careers" className="group w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-700 bg-slate-800/30 text-slate-200 hover:text-cyan-400 hover:border-cyan-400 hover:bg-slate-800/75 font-semibold px-8 py-4 rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-in-out text-center cursor-pointer">
            <span>{h.ctaExplore}</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto w-full border-t border-slate-800/60 pt-8">
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">91+</div>
            <p className="text-slate-400 text-xs md:text-sm mt-1 font-semibold tracking-wide uppercase">{h.statsColleges}</p>
          </div>
          <div className="text-center border-x border-slate-800/60 px-4 group">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">10+</div>
            <p className="text-slate-400 text-xs md:text-sm mt-1 font-semibold tracking-wide uppercase">{h.statsExams}</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">6</div>
            <p className="text-slate-400 text-xs md:text-sm mt-1 font-semibold tracking-wide uppercase">{h.statsStreams}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {cards.map((card, i) => (
          <Link key={i} href={card.href} className="group">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-in-out cursor-pointer h-full flex flex-col justify-between">
              <div>
                <div className="mb-4">{card.icon}</div>
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
