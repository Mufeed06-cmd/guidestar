'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 flex flex-col font-sans">
      <Navbar />
      <section className="px-6 py-20 max-w-4xl mx-auto w-full flex-grow flex flex-col justify-center items-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-white">Contact Us</h1>
        
        <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-8 md:p-12 shadow-lg max-w-2xl w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            If you have any questions, feedback, or need support, please feel free to reach out to us. We would love to hear from you!
          </p>
          
          <div className="flex flex-col items-center">
            <a href="mailto:nakeebmufeed@gmail.com" className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 inline-block">
              nakeebmufeed@gmail.com
            </a>
            <p className="text-slate-400 mt-6 text-sm font-medium tracking-wide">We aim to respond to all inquiries within 24-48 hours.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
