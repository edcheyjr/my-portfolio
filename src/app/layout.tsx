import type { Metadata } from 'next'
import './globals.css'
import { Montserrat_Alternates } from 'next/font/google'

// Montserrat Fonte
const montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '800'],
})

export const metadata: Metadata = {
  title: "Welcome to Ed's World",
  description: 'All about who is Edwin Chebii',
} //TODO metadata to improve SEO

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`z-0 bg-[rgb(36,36,36)] text-zinc-300 h-screen overflow-x-hidden overflow-y-scroll scroll-smooth transition-all delay-300 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary`}
      >
        {/*TODO Header should be here */}
        {children}
        {/* TODO Footer */}
      </body>
    </html>
  )
}
