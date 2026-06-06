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
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar active="about" />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-2">{a.title}</h2>
        <p className="text-gray-400 mb-8">{a.subtitle}</p>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-yellow-400 font-bold text-xl mb-3">{a.missionTitle}</h3>
          <p className="text-gray-300 leading-relaxed">{a.missionDesc}</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-yellow-400 font-bold text-xl mb-3">{a.offerTitle}</h3>
          <div className="grid gap-3">
            {offers.map((item, i) => (
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
          <h3 className="text-yellow-400 font-bold text-xl mb-3">{a.builtForTitle}</h3>
          <p className="text-gray-300 leading-relaxed">{a.builtForDesc}</p>
        </div>

        <div className="bg-yellow-900 border border-yellow-500 rounded-xl p-6">
          <h3 className="text-yellow-400 font-bold text-xl mb-2">{a.communityTitle}</h3>
          <p className="text-yellow-200 text-sm leading-relaxed">{a.communityDesc}</p>
        </div>
      </div>
    </main>
  )
}
