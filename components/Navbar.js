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
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white group">
          <svg className="w-6 h-6 text-cyan-400 group-hover:rotate-[360deg] transition-transform duration-500 ease-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" fill="currentColor" strokeLinejoin="round" />
          </svg>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold tracking-tight">{t.nav.brand}</span>
        </Link>
        <div className="hidden sm:block border-l border-slate-800 h-5 mx-1" />
        <p className="hidden sm:block text-xs text-slate-400 font-medium tracking-wide">{t.nav.tagline}</p>
      </div>
      <div className="flex items-center gap-6 text-sm">
        <Link href="/careers" className={link('/careers')}>{t.nav.careers}</Link>
        <Link href="/exams" className={link('/exams')}>{t.nav.exams}</Link>
        <Link href="/colleges" className={link('/colleges')}>{t.nav.colleges}</Link>
        <Link href="/ai-guide" className={link('/ai-guide')}>{t.nav.aiGuide}</Link>
        <button
          onClick={toggleLang}
          className="ml-2 px-3 py-1 rounded-lg border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 ease-in-out text-xs font-semibold cursor-pointer"
          aria-label="Toggle language"
        >
          {lang === 'en' ? 'తెలుగు' : 'English'}
        </button>
      </div>
    </nav>
  )
}
