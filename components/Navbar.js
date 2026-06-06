'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '@/lib/LanguageContext'

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const pathname = usePathname()

  const link = (href) =>
    `hover:text-yellow-400 transition ${pathname === href ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div>
        <Link href="/" className="text-xl font-bold text-yellow-400">{t.nav.brand}</Link>
        <p className="text-xs text-gray-400">{t.nav.tagline}</p>
      </div>
      <div className="flex items-center gap-6 text-sm">
        <Link href="/careers" className={link('/careers')}>{t.nav.careers}</Link>
        <Link href="/exams" className={link('/exams')}>{t.nav.exams}</Link>
        <Link href="/colleges" className={link('/colleges')}>{t.nav.colleges}</Link>
        <Link href="/ai-guide" className={link('/ai-guide')}>{t.nav.aiGuide}</Link>
        <button
          onClick={toggleLang}
          className="ml-2 px-3 py-1 rounded-lg border border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition text-xs font-semibold"
          aria-label="Toggle language"
        >
          {lang === 'en' ? 'తెలుగు' : 'English'}
        </button>
      </div>
    </nav>
  )
}
