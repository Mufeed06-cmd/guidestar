import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'VidyaDisha | Your Direction to Higher Education',
  description: 'Free career guidance for students in Andhra Pradesh and Telangana after 10th class — streams, exams, colleges and AI guidance.',
  openGraph: {
    title: 'VidyaDisha | Your Direction to Higher Education',
    description: 'Free career guidance for students in AP & Telangana — streams, exams, colleges and AI guidance after 10th class.',
    url: 'https://VidyaDisha.edu',
    images: [{ url: 'https://VidyaDisha.edu/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
