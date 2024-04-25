import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })



export const metadata = {
  title: 'Interno',
  description: "Let's create your dream interior",
  icons: {
    icon: '/logo-icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}