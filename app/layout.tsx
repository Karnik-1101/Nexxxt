import '@/app/ui/global.css'
// import {Inter } from 'next/font/google'
// import { inter } from '@/app/ui/font'

// const inter = Inter({
//   subsets: ['latin'],
//   display:'swap'
// })

import { Roboto_Mono, Inter } from 'next/font/google';


const roboto = Roboto_Mono({
  weight: ['400'],
  style:['italic'],
  subsets: ['latin'],
  display:'swap'
})


const inter = Inter({
  subsets: ['cyrillic'], 
  display:'swap'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={roboto.className} lang="en">
      <body >{children}</body>
    </html>
  );
}
