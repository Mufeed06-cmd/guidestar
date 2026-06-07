export const metadata = {
  title: 'About VidyaDisha | Free Career Guidance',
  description: 'Learn about VidyaDisha, our mission to help students in Andhra Pradesh and Telangana choose the right education path after 10th class.',
  openGraph: {
    title: 'About VidyaDisha | Free Career Guidance',
    description: 'Learn about VidyaDisha, our mission to help students in Andhra Pradesh and Telangana choose the right education path after 10th class.',
    url: 'https://vidyadisha.me/about',
    images: [{ url: 'https://vidyadisha.me/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About VidyaDisha | Free Career Guidance',
    description: 'Learn about VidyaDisha, our mission to help students in Andhra Pradesh and Telangana choose the right education path after 10th class.',
    images: ['https://vidyadisha.me/og-image.png'],
  }
}

export default function AboutLayout({ children }) {
  return children
}
