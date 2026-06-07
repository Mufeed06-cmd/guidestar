'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '@/lib/LanguageContext'

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const link = (href) =>
    `hover:text-cyan-400 transition-all duration-200 ease-in-out ${pathname === href ? 'text-cyan-400 font-semibold' : 'text-slate-300'}`

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800/80 transition-all duration-200">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col items-start md:flex-row md:items-center gap-0.5 md:gap-3">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white group">
            <svg className="w-6 h-6 text-cyan-400 group-hover:rotate-[360deg] transition-transform duration-500 ease-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" fill="currentColor" strokeLinejoin="round" />
            </svg>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold tracking-tight">{t.nav.brand}</span>
          </Link>
          <div className="hidden md:block border-l border-slate-800 h-5 mx-1" />
          <p className="text-[10px] md:text-xs text-slate-400 font-medium tracking-wide mt-0.5 md:mt-0 pl-8 md:pl-0">
            {t.nav.tagline}
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
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

        {/* Mobile Language Toggle */}
        <button
          onClick={toggleLang}
          className="md:hidden text-xs border-2 border-cyan-400 text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full cursor-pointer ml-auto mr-2 font-semibold"
          aria-label="Toggle language"
        >
          {lang === 'en' ? 'EN → తె' : 'తె → EN'}
        </button>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-cyan-400 focus:outline-none transition-colors duration-200 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <span className="text-2xl leading-none font-bold">✕</span>
          ) : (
            <span className="text-2xl leading-none">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-4 flex flex-col gap-4 text-sm transition-all duration-300 ease-in-out">
          <Link 
            href="/careers" 
            onClick={() => setIsOpen(false)} 
            className={`${link('/careers')} py-1 border-b border-slate-800/40`}
          >
            {t.nav.careers}
          </Link>
          <Link 
            href="/exams" 
            onClick={() => setIsOpen(false)} 
            className={`${link('/exams')} py-1 border-b border-slate-800/40`}
          >
            {t.nav.exams}
          </Link>
          <Link 
            href="/colleges" 
            onClick={() => setIsOpen(false)} 
            className={`${link('/colleges')} py-1 border-b border-slate-800/40`}
          >
            {t.nav.colleges}
          </Link>
          <Link 
            href="/ai-guide" 
            onClick={() => setIsOpen(false)} 
            className={`${link('/ai-guide')} py-1`}
          >
            {t.nav.aiGuide}
          </Link>
        </div>
      )}
    </nav>
  )
}
