'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import translations from './i18n'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('guidestar-lang')
    if (saved === 'te' || saved === 'en') setLang(saved)
  }, [])

  function toggleLang() {
    const next = lang === 'en' ? 'te' : 'en'
    setLang(next)
    localStorage.setItem('guidestar-lang', next)
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
