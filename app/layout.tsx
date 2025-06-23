import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Cîrstea Eduard - Portfolio',
  description: 'Official portfolio of Cîrstea Eduard - Full Stack Developer specialized in React, Next.js, Node.js and modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
} 