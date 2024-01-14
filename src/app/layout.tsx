import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import GlobalStyles from '../styles/global'
import React from 'react'


const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Form-client',
  description: 'Formulário de fidelidade para clientes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <GlobalStyles />
      <body className={ poppins.className }>{children}</body>      
    </html>
  )
}
