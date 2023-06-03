import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Ubuntu } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Next.js App',
  description: 'A full stack nextjs app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-none bg-neutral-950 text-zinc-400`}>

        <div className='max-w-page min-h-screen mx-auto px-16 flex flex-col justify-between'>
          <Navbar />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  )
}
