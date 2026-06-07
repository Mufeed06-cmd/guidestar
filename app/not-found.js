import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 flex flex-col items-center justify-center px-6 text-center font-sans">
      <p className="text-7xl mb-6">🔭</p>
      <h1 className="text-4xl font-bold mb-3 tracking-tight">Page Not Found</h1>
      <p className="text-slate-400 mb-2">The page you're looking for doesn't exist or has been moved.</p>
      <p className="text-slate-500 text-sm mb-8">మీరు వెతుకుతున్న పేజీ కనుగొనబడలేదు.</p>
      <Link href="/" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-cyan-500/20 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-in-out">
        ← Back to Home
      </Link>
    </main>
  )
}
