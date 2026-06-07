'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/LanguageContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  const offers = [
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.1" />
        </svg>
      ),
      title: a.offer1Title,
      desc: a.offer1Desc
    },
    {
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: a.offer2Title,
      desc: a.offer2Desc
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" fill="currentColor" fillOpacity="0.1" />
        </svg>
      ),
      title: a.offer3Title,
      desc: a.offer3Desc
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" fill="currentColor" fillOpacity="0.1" />
        </svg>
      ),
      title: a.offer4Title,
      desc: a.offer4Desc
    },
  ]

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 font-sans flex flex-col justify-between">
      <div>
        <Navbar active="about" />

        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-2 tracking-tight">{a.title}</h2>
          <p className="text-slate-400 mb-8">{a.subtitle}</p>

          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 mb-6 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.08)] hover:scale-[1.01] transition-all duration-200 ease-in-out">
            <h3 className="text-cyan-400 font-bold text-xl mb-3">{a.missionTitle}</h3>
            <p className="text-slate-300 leading-relaxed">{a.missionDesc}</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 mb-6 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.08)] hover:scale-[1.01] transition-all duration-200 ease-in-out">
            <h3 className="text-cyan-400 font-bold text-xl mb-3">{a.offerTitle}</h3>
            <div className="grid gap-4">
              {offers.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 mb-6 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.08)] hover:scale-[1.01] transition-all duration-200 ease-in-out">
            <h3 className="text-cyan-400 font-bold text-xl mb-3">{a.builtForTitle}</h3>
            <p className="text-slate-300 leading-relaxed">{a.builtForDesc}</p>
          </div>

          <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-6 hover:scale-[1.01] transition-all duration-200 ease-in-out">
            <h3 className="text-cyan-400 font-bold text-xl mb-2">{a.communityTitle}</h3>
            <p className="text-blue-200 text-sm leading-relaxed">{a.communityDesc}</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
