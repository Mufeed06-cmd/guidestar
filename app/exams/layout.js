export const metadata = {
  title: 'Exam Notifications | VidyaDisha',
  description: 'EAPCET, NEET, JEE, CLAT and more — exam dates, eligibility and application links for AP & TS students.',
  openGraph: {
    title: 'Exam Notifications | VidyaDisha',
    description: 'EAPCET, NEET, JEE, CLAT and more — exam dates, eligibility and application links for AP & TS students.',
    url: 'https://vidyadisha.me/exams',
    images: [{ url: 'https://vidyadisha.me/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exam Notifications | VidyaDisha',
    description: 'EAPCET, NEET, JEE, CLAT and more — exam dates, eligibility and application links for AP & TS students.',
    images: ['https://vidyadisha.me/og-image.png'],
  }
}

export default function ExamsLayout({ children }) {
  return children
}
