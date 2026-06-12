'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 flex flex-col font-sans">
      <Navbar />
      <section className="px-6 py-20 max-w-4xl mx-auto w-full flex-grow">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white">Privacy Policy</h1>
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to VidyaDisha (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at <a href="mailto:nakeebmufeed@gmail.com" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">nakeebmufeed@gmail.com</a>.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website (<Link href="https://vidyadisha.me" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">vidyadisha.me</Link>), or otherwise when you contact us.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Sharing Your Information</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at <a href="mailto:nakeebmufeed@gmail.com" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">nakeebmufeed@gmail.com</a>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
