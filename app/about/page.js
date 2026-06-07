'use client'
import Navbar from '@/components/Navbar'
import { useLang } from '@/lib/LanguageContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  const offers = [
    { icon: "🎯", title: a.offer1Title, desc: a.offer1Desc },
    { icon: "📝", title: a.offer2Title, desc: a.offer2Desc },
    { icon: "🏫", title: a.offer3Title, desc: a.offer3Desc },
    { icon: "🤖", title: a.offer4Title, desc: a.offer4Desc },
  ]

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 font-sans">
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
          <div className="grid gap-3">
            {offers.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
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
    </main>
  )
}
