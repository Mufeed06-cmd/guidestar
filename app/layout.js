import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: 'VidyaDisha | Your Direction to Higher Education',
  description: 'Free career guidance for students in Andhra Pradesh and Telangana after 10th class — streams, exams, colleges and AI guidance.',
  openGraph: {
    title: 'VidyaDisha | Your Direction to Higher Education',
    description: 'Free career guidance for students in AP & Telangana — streams, exams, colleges and AI guidance after 10th class.',
    url: 'https://vidyadisha.me',
    images: [{ url: 'https://vidyadisha.me/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VidyaDisha | Your Direction to Higher Education',
    description: 'Free career guidance for students in AP & Telangana — streams, exams, colleges and AI guidance after 10th class.',
    images: ['https://vidyadisha.me/og-image.png'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-50 font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
