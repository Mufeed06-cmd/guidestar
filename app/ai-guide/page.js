'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { useLang } from '@/lib/LanguageContext'

const ERROR_MESSAGES = {
  rate_limited: '⏳ Too many requests — please wait a minute and try again.',
  upstream_error: '🔌 The AI service is temporarily unavailable. Please try again shortly.',
  empty_response: '⚠️ The AI returned an empty response. Please try again.',
  default: '❌ Something went wrong. Please check your connection and try again.',
}

export default function AIGuide() {
  const { t } = useLang()
  const ai = t.aiGuide

  const questions = [
    { id: 1, question: ai.q1, options: ["Maths & Physics", "Biology & Chemistry", "Commerce & Economics", "History & Languages", "Computers & Technology"] },
    { id: 2, question: ai.q2, options: ["Help sick people get better", "Build machines or software", "Run a business or manage money", "Teach or help others", "Work in government or law"] },
    { id: 3, question: ai.q3, options: ["Very low — need free options", "Low — under ₹50K/year", "Medium — ₹50K to ₹2L/year", "High — above ₹2L/year"] },
    { id: 4, question: ai.q4, options: ["Above 90% — excellent", "75% to 90% — good", "60% to 75% — average", "Below 60% — below average"] },
    { id: 5, question: ai.q5, options: ["Near my home in AP", "Anywhere in AP or TS", "Any college in India", "Abroad if possible"] },
  ]

  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function selectAnswer(questionId, answer) {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  async function getGuidance() {
    setLoading(true)
    setResult('')
    setError('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(ERROR_MESSAGES[data?.error] ?? ERROR_MESSAGES.default)
      } else {
        setResult(data.result)
      }
    } catch {
      setError(ERROR_MESSAGES.default)
    } finally {
      setLoading(false)
    }
  }

  const allAnswered = Object.keys(answers).length === questions.length

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 font-sans">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">{ai.title}</h2>
          <p className="text-slate-400">{ai.subtitle}</p>
          <p className="text-slate-500 text-sm mt-1">{ai.subtitle2}</p>
        </div>

        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 mb-8 text-xs text-slate-400 leading-relaxed">
          <p className="font-semibold text-slate-300 mb-1">⚠️ AI-Generated Guidance — Not Official Advice</p>
          Responses are produced by an AI model and may be inaccurate or incomplete. This tool is for general awareness only.
          Always verify career, college and exam information from official sources, and consult a certified counselor before making decisions.
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {questions.map((q) => (
            <div key={q.id} className={`flex-1 h-2 rounded-full transition-all duration-300 ${answers[q.id] ? 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]' : 'bg-slate-700'}`} />
          ))}
        </div>

        {/* Questions */}
        <div className="grid gap-6 mb-8">
          {questions.map((q) => (
            <div key={q.id} className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-6 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.08)] transition-all duration-200 ease-in-out">
              <p className="text-white font-semibold mb-4">{q.id}. {q.question}</p>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => selectAnswer(q.id, opt)}
                    className={`text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ease-in-out ${
                      answers[q.id] === opt
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold shadow-md shadow-blue-500/10'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white border border-transparent hover:border-slate-600'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-950/40 border border-red-500/50 rounded-xl p-4 mb-4 text-red-300 text-sm">
            {error}
            <button onClick={() => setError('')} className="ml-4 text-xs underline hover:text-red-200">Dismiss</button>
          </div>
        )}

        {/* Submit */}
        {allAnswered && !result && (
          <button
            onClick={getGuidance}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 rounded-xl text-lg hover:from-blue-600 hover:to-cyan-600 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-500/10 hover:shadow-cyan-500/25 transition-all duration-200 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? ai.loading : ai.getGuidance}
          </button>
        )}

        {/* Result */}
        {result && (
          <div className="bg-slate-800 border border-blue-500/40 rounded-2xl p-6 mt-6 shadow-xl shadow-blue-500/5">
            <h3 className="text-cyan-400 font-bold text-lg mb-4">{ai.resultTitle}</h3>
            <div className="text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">{result}</div>

            <div className="mt-6 bg-blue-950/20 border-l-4 border-cyan-500 p-4 rounded-r-lg">
              <p className="text-slate-200 text-sm font-semibold mb-2">⚠️ {ai.disclaimerTitle}</p>
              <ul className="text-slate-400 text-xs space-y-1 ml-6 list-disc">
                <li>{ai.disclaimer1}</li>
                <li>{ai.disclaimer2}</li>
                <li>{ai.disclaimer3}</li>
                <li>{ai.disclaimer4}</li>
              </ul>
            </div>

            <button
              onClick={() => { setResult(''); setError(''); setAnswers({}) }}
              className="mt-6 w-full border border-slate-700 text-slate-400 py-3 rounded-lg hover:border-cyan-400 hover:text-cyan-400 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 ease-in-out"
            >
              {ai.startOver}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
