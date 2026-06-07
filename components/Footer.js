'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 mt-12 px-6 py-10 text-sm text-gray-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <p className="text-yellow-400 font-bold text-base mb-2">⭐ VidyaDisha</p>
          <p className="leading-relaxed">Free career guidance for students in Andhra Pradesh &amp; Telangana after 10th class. Built by students, for students.</p>
          <p className="mt-3">
            <Link href="/about" className="text-yellow-400 hover:underline">About this project →</Link>
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-white font-semibold mb-2">Explore</p>
          <ul className="space-y-1">
            <li><Link href="/careers" className="hover:text-yellow-400 transition">Career Paths</Link></li>
            <li><Link href="/exams" className="hover:text-yellow-400 transition">Exam Notifications</Link></li>
            <li><Link href="/colleges" className="hover:text-yellow-400 transition">Top Colleges</Link></li>
            <li><Link href="/ai-guide" className="hover:text-yellow-400 transition">AI Career Guide</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <p className="text-white font-semibold mb-2">Connect</p>
          <p>📧 <a href="mailto:contact@VidyaDisha.edu" className="hover:text-yellow-400 transition">contact@VidyaDisha.edu</a></p>
          <div className="flex gap-4 mt-3">
            <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition">Instagram</a>
            <a href="#" aria-label="YouTube" className="hover:text-yellow-400 transition">YouTube</a>
            <a href="#" aria-label="Twitter/X" className="hover:text-yellow-400 transition">Twitter / X</a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 text-xs text-gray-600">
        <p>⚠️ <strong className="text-gray-500">Disclaimer:</strong> All information on VidyaDisha — including exam dates, college fees, eligibility criteria, and salary figures — is indicative and for general guidance only. Data may be outdated or subject to change. Students and parents should verify all details from official sources before making any decisions.</p>
        <p className="mt-2 text-center text-gray-700">© {new Date().getFullYear()} VidyaDisha · Built by NBKR Institute of Science &amp; Technology, Batch-6 AID-A</p>
      </div>
    </footer>
  )
}
