'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Terms() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 flex flex-col font-sans">
      <Navbar />
      <section className="px-6 py-20 max-w-4xl mx-auto w-full flex-grow">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white">Terms of Service</h1>
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing our website at <Link href="https://vidyadisha.me" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">vidyadisha.me</Link>, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on VidyaDisha&apos;s website for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Disclaimer</h2>
          <p>
            The materials on VidyaDisha&apos;s website are provided on an &apos;as is&apos; basis. VidyaDisha makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitations</h2>
          <p>
            In no event shall VidyaDisha or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VidyaDisha&apos;s website.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:nakeebmufeed@gmail.com" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">nakeebmufeed@gmail.com</a>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
