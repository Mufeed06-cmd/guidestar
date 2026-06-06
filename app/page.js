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
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <p className="text-yellow-400 text-sm font-semibold mb-3">{h.heroLabel}</p>
        <h2 className="text-5xl font-bold mb-4">{h.heroTitle} <span className="text-yellow-400">{h.heroHighlight}</span></h2>
        <p className="text-gray-400 text-lg mb-8">{h.heroDesc}</p>
        <div className="flex gap-4 justify-center">
          <Link href="/ai-guide" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
            {h.ctaAI}
          </Link>
          <Link href="/careers" className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-yellow-400 transition">
            {h.ctaExplore}
          </Link>
        </div>
      </section>

      <section className="px-6 py-8 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <Link key={i} href={card.href}>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-yellow-400 transition cursor-pointer h-full">
              <span className="text-3xl">{card.icon}</span>
              <h3 className="text-white font-semibold mt-3">{card.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{card.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  )
}
