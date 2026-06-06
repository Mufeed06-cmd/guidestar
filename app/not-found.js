import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl mb-6">🔭</p>
      <h1 className="text-4xl font-bold mb-3">Page Not Found</h1>
      <p className="text-gray-400 mb-2">The page you're looking for doesn't exist or has been moved.</p>
      <p className="text-gray-500 text-sm mb-8">మీరు వెతుకుతున్న పేజీ కనుగొనబడలేదు.</p>
      <Link href="/" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
        ← Back to Home
      </Link>
    </main>
  )
}
