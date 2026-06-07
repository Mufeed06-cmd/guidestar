'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '@/lib/LanguageContext'

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const pathname = usePathname()

  const link = (href) =>
    `hover:text-cyan-400 transition-all duration-200 ease-in-out ${pathname === href ? 'text-cyan-400 font-semibold' : 'text-slate-300'}`

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800/80 px-6 py-4 flex justify-between items-center transition-all duration-200">
      <div>
        <Link href="/" className="text-xl font-bold text-blue-400 hover:text-cyan-400 transition-colors duration-200">{t.nav.brand}</Link>
        <p className="text-xs text-slate-400">{t.nav.tagline}</p>
      </div>
      <div className="flex items-center gap-6 text-sm">
        <Link href="/careers" className={link('/careers')}>{t.nav.careers}</Link>
        <Link href="/exams" className={link('/exams')}>{t.nav.exams}</Link>
        <Link href="/colleges" className={link('/colleges')}>{t.nav.colleges}</Link>
        <Link href="/ai-guide" className={link('/ai-guide')}>{t.nav.aiGuide}</Link>
        <button
          onClick={toggleLang}
          className="ml-2 px-3 py-1 rounded-lg border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 ease-in-out text-xs font-semibold"
          aria-label="Toggle language"
        >
          {lang === 'en' ? 'తెలుగు' : 'English'}
        </button>
      </div>
    </nav>
  )
}
