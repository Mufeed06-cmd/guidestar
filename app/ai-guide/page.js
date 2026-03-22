'use client'
import { useState } from 'react'

const questions = [
  {
    id: 1,
    question: "Which subjects do you enjoy the most?",
    telugu: "మీకు ఏ సబ్జెక్టులు ఇష్టం?",
    options: ["Maths & Physics", "Biology & Chemistry", "Commerce & Economics", "History & Languages", "Computers & Technology"]
  },
  {
    id: 2,
    question: "What kind of work do you want to do in future?",
    telugu: "భవిష్యత్తులో మీరు ఏ పని చేయాలనుకుంటున్నారు?",
    options: ["Help sick people get better", "Build machines or software", "Run a business or manage money", "Teach or help others", "Work in government or law"]
  },
  {
    id: 3,
    question: "What is your family's budget for education?",
    telugu: "విద్య కోసం మీ కుటుంబ బడ్జెట్ ఎంత?",
    options: ["Very low — need free options", "Low — under ₹50K/year", "Medium — ₹50K to ₹2L/year", "High — above ₹2L/year"]
  },
  {
    id: 4,
    question: "How are your 10th class marks?",
    telugu: "మీ 10వ తరగతి మార్కులు ఎలా ఉన్నాయి?",
    options: ["Above 90% — excellent", "75% to 90% — good", "60% to 75% — average", "Below 60% — below average"]
  },
  {
    id: 5,
    question: "Where do you want to study?",
    telugu: "మీరు ఎక్కడ చదువుకోవాలనుకుంటున్నారు?",
    options: ["Near my home in AP", "Anywhere in AP or TS", "Any college in India", "Abroad if possible"]
  }
]

export default function AIGuide() {
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(0)

  function selectAnswer(questionId, answer) {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  async function getGuidance() {
    setLoading(true)
    setResult('')

    const prompt = `You are a career counselor for students in Andhra Pradesh, India who have completed 10th class.

A student has answered these questions:
1. Favorite subjects: ${answers[1]}
2. Future work interest: ${answers[2]}
3. Family budget: ${answers[3]}
4. 10th marks: ${answers[4]}
5. Study location preference: ${answers[5]}

Give personalized career guidance in this format:
1. Best stream to choose after 10th (MPC/BiPC/CEC/MEC/Vocational) with reason
2. Top 3 career options that suit this student
3. Best colleges in AP/Telangana for this student based on budget
4. Key exams to prepare for
5. One motivational message in Telugu

Keep it simple, clear and encouraging. The student is from AP so mention AP specific options.`

    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 1000
        })
      })
      const data = await res.json()
      setResult(data.choices[0].message.content)
    } catch (error) {
      setResult('Sorry, could not get guidance right now. Please try again.')
    }
    setLoading(false)
  }

  const allAnswered = Object.keys(answers).length === questions.length

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-yellow-400">⭐ Guidestar</a>
        <div className="flex gap-6 text-sm">
          <a href="/careers" className="text-gray-300 hover:text-yellow-400">Careers</a>
          <a href="/exams" className="text-gray-300 hover:text-yellow-400">Exams</a>
          <a href="/colleges" className="text-gray-300 hover:text-yellow-400">Colleges</a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">🤖 AI Career Guide</h2>
          <p className="text-gray-400">Answer 5 questions — get personalized career guidance</p>
          <p className="text-gray-500 text-sm mt-1">5 ప్రశ్నలకు సమాధానం ఇవ్వండి — మీకు సరైన కెరీర్ సూచన పొందండి</p>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {questions.map((q, i) => (
            <div key={i} className={`flex-1 h-2 rounded-full ${answers[q.id] ? 'bg-yellow-400' : 'bg-gray-700'}`} />
          ))}
        </div>

        {/* Questions */}
        <div className="grid gap-6 mb-8">
          {questions.map((q) => (
            <div key={q.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-white font-semibold mb-1">{q.id}. {q.question}</p>
              <p className="text-gray-500 text-sm mb-4">{q.telugu}</p>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => selectAnswer(q.id, opt)}
                    className={`text-left px-4 py-3 rounded-lg text-sm transition ${
                      answers[q.id] === opt
                        ? 'bg-yellow-400 text-black font-bold'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit */}
        {allAnswered && !result && (
          <button
            onClick={getGuidance}
            disabled={loading}
            className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl text-lg hover:bg-yellow-300 transition"
          >
            {loading ? '🤖 Getting your personalized guidance...' : '🚀 Get My Career Guidance'}
          </button>
        )}

        {/* Result */}
        {result && (
          <div className="bg-gray-900 border border-yellow-500 rounded-xl p-6 mt-6">
            <h3 className="text-yellow-400 font-bold text-lg mb-4">🌟 Your Personalized Career Guidance</h3>
            <div className="text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">
              {result}
            </div>
            <button
              onClick={() => { setResult(''); setAnswers({}) }}
              className="mt-6 w-full border border-gray-600 text-gray-400 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </main>
  )
}