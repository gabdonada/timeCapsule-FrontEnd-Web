import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: ['700'], variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'NLW Space Time',
  description: 'Time capsule created using React, NextJs, Tailwind and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //You can define the standards down below, as I did with BG-Gray (where I want to make all site with that background)
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
