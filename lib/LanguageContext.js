'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import translations from './i18n'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('VidyaDisha-lang')
      if (saved === 'te' || saved === 'en') return saved
    }
    return 'en'
  })

  function toggleLang() {
    const next = lang === 'en' ? 'te' : 'en'
    setLang(next)
    localStorage.setItem('VidyaDisha-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
