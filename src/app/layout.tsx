import '../../styles/globals.scss';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Yewon\'s Blog',
  description: 'Yewon\'s Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={sans.className}>
			<body className='flex flex-col w-full max-w-screen-2xl mx-auto bg-dark-800'>
				<Header />
				<main className='grow'>{children}</main>
				<Footer />
			</body>
    </html>
  )
}
