import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "VidyaDisha | Your Direction to Higher Education",
  description:
    "Free career guidance for students in Andhra Pradesh and Telangana after 10th class — streams, exams, colleges and AI guidance.",
  openGraph: {
    title: "VidyaDisha | Your Direction to Higher Education",
    description:
      "Free career guidance for students in AP & Telangana — streams, exams, colleges and AI guidance after 10th class.",
    url: "https://vidyadisha.me",
    images: [
      { url: "https://vidyadisha.me/og-image.png", width: 1200, height: 630 },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VidyaDisha | Your Direction to Higher Education",
    description:
      "Free career guidance for students in AP & Telangana — streams, exams, colleges and AI guidance after 10th class.",
    images: ["https://vidyadisha.me/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "VidyaDisha",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3GJZ0KDXDE"
          strategy="afterInteractive"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5485083249012996"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3GJZ0KDXDE');
          `}
        </Script>
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is VidyaDisha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VidyaDisha is a free career and education guidance platform helping students in Andhra Pradesh and Telangana choose the right stream, colleges, and career paths after 10th class."
        }
      },
      {
        "@type": "Question",
        "name": "Is VidyaDisha free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, VidyaDisha is completely free. All career guidance, college information, exam details, and AI guidance are available at no cost."
        }
      },
      {
        "@type": "Question",
        "name": "Which streams can I explore on VidyaDisha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VidyaDisha covers 6 major streams: MPC (Maths, Physics, Chemistry), BiPC (Biology), MEC (Commerce), HEC (Humanities), CEC, and Vocational courses after 10th class."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the right stream after 10th?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VidyaDisha provides stream-wise guides, entrance exam details, college comparisons, and an AI guide to help AP and Telangana students make the best decision after 10th class."
        }
      },
      {
        "@type": "Question",
        "name": "Which entrance exams does VidyaDisha cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VidyaDisha covers 10+ entrance exams including EAMCET, NEET, JEE, POLYCET, LAWCET, and other major exams relevant to students in AP and Telangana."
        }
      }
    ]
  }`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-50 font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
