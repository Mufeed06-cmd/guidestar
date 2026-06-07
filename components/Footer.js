'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/40 mt-12 px-6 py-10 text-sm text-slate-400 transition-all duration-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <p className="text-cyan-400 font-bold text-base mb-2">⭐ VidyaDisha</p>
          <p className="leading-relaxed text-slate-300">Free career guidance for students in Andhra Pradesh &amp; Telangana after 10th class. Built by students, for students.</p>
          <p className="mt-3">
            <Link href="/about" className="text-blue-400 hover:text-cyan-400 transition-colors duration-200 hover:underline">About this project →</Link>
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-white font-semibold mb-2">Explore</p>
          <ul className="space-y-1">
            <li><Link href="/careers" className="hover:text-cyan-400 transition-colors duration-200">Career Paths</Link></li>
            <li><Link href="/exams" className="hover:text-cyan-400 transition-colors duration-200">Exam Notifications</Link></li>
            <li><Link href="/colleges" className="hover:text-cyan-400 transition-colors duration-200">Top Colleges</Link></li>
            <li><Link href="/ai-guide" className="hover:text-cyan-400 transition-colors duration-200">AI Career Guide</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold mb-2">Connect</p>
          <p className="text-slate-300">📧 <a href="mailto:contact@vidyadisha.me" className="text-blue-400 hover:text-cyan-400 transition-colors duration-200 font-medium">contact@vidyadisha.me</a></p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-800 text-xs text-slate-500">
        <p>⚠️ <strong className="text-slate-400">Disclaimer:</strong> All information on VidyaDisha — including exam dates, college fees, eligibility criteria, and salary figures — is indicative and for general guidance only. Data may be outdated or subject to change. Students and parents should verify all details from official sources before making any decisions.</p>
        <p className="mt-2 text-center text-slate-600">© {new Date().getFullYear()} VidyaDisha · Built by NBKR Institute of Science &amp; Technology, Batch-6 AID-A</p>
      </div>
    </footer>
  )
}
