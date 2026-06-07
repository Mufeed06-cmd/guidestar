export const metadata = {
  title: 'Colleges in AP & Telangana | VidyaDisha',
  description: 'Find the best engineering, medical, law, commerce and polytechnic colleges in Andhra Pradesh and Telangana with fees and entrance exams.',
  openGraph: {
    title: 'Colleges in AP & Telangana | VidyaDisha',
    description: 'Find the best engineering, medical, law and polytechnic colleges in AP & Telangana with fees and entrance exam details.',
    url: 'https://vidyadisha.me/colleges',
    images: [{ url: 'https://vidyadisha.me/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colleges in AP & Telangana | VidyaDisha',
    description: 'Find the best engineering, medical, law and polytechnic colleges in AP & Telangana with fees and entrance exam details.',
    images: ['https://vidyadisha.me/og-image.png'],
  }
}

export default function CollegesLayout({ children }) {
  return children
}
