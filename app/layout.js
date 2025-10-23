import './globals.css'

export const metadata = {
  title: 'Developer Portfolio',
  description: 'Personal portfolio showcasing development projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
