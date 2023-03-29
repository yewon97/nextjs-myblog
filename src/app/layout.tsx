import './globals.css';
import { Open_Sans } from 'next/font/google';

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
    <html lang="en" className={sans.className}>
      <body>
				<header>

				</header>

				<main>
					{children}
				</main>

				<footer>
					
				</footer>
			</body>
    </html>
  )
}
