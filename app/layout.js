import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Developer Portfolio',
  description: 'Personal portfolio showcasing development projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
