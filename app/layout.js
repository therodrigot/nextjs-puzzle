import './globals.css'
// import { Inter } from 'next/font/google'
import { VT323 } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const vt = VT323({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vt.className}>{children}</body>
    </html>
  )
}
