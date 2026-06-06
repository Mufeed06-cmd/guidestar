import { NextResponse } from 'next/server'

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'

// Sanitize: strip HTML tags and truncate to 500 chars
function sanitize(str) {
  return String(str).replace(/<[^>]*>/g, '').trim().slice(0, 500)
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { answers } = body

    if (!answers || typeof answers !== 'object') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    // Sanitize each answer
    const safe = Object.fromEntries(
      Object.entries(answers).map(([k, v]) => [k, sanitize(v)])
    )

    const prompt = `You are an expert career counselor for students in Andhra Pradesh and Telangana who have completed 10th class.

A student has answered these questions:

1. Favorite subjects: ${safe[1]}
2. Future work interest: ${safe[2]}
3. Family budget: ${safe[3]}
4. 10th marks: ${safe[4]}
5. Study location preference: ${safe[5]}

Important Rules:
* Use the student's interests as the primary factor.
* Use 10th marks and budget as secondary factors.
* Recommend modern careers when appropriate.
* Never guarantee admission into any college.
* Keep guidance practical, encouraging and realistic.

Give the response in this format:

## 1. Recommended Stream After 10th
* Best stream and why.

## 2. Top Career Options
5 careers with: Career Name, Why it matches, Typical Degree.

## 3. Suggested Colleges (Examples Only)
3-5 colleges from AP/Telangana. Add: "Admission depends on entrance exam rank, eligibility criteria, category and seat availability."

## 4. Exams To Prepare For
Relevant exams and what each is for.

## 5. Alternative Path
One alternative stream or career.

## 6. Motivational Message
Short motivational message in Telugu.

Keep the entire response under 500 words.`

    const groqRes = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 1000,
      }),
    })

    if (groqRes.status === 429) {
      return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
    }

    if (!groqRes.ok) {
      return NextResponse.json({ error: 'upstream_error' }, { status: 502 })
    }

    const data = await groqRes.json()
    const content = data?.choices?.[0]?.message?.content
    if (!content) return NextResponse.json({ error: 'empty_response' }, { status: 502 })

    return NextResponse.json({ result: content })
  } catch {
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
