import Link from 'next/link';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import Logo from '../../public/images/logo.png'

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
      <body className='pt-28'>
				<header className='px-8 py-6 bg-white flex flex-row justify-between items-center border-solid border-b-2 border-slate-200 shadow-md fixed top-0 left-0 right-0'>
					<h1>
						<Link href="/" className='nav__logo'>
							<Image src={Logo} alt="예원이의 블로그" height={52}  />
						</Link>
					</h1>
					<nav className='nav'>
						<ul className='flex flex-row gap-x-6 '>
							<li>
								<Link href={'/'} className='hover:font-bold hover:text-blue-800'>Home</Link>
							</li>
							<li>
								<Link href={'/'} className='hover:font-bold hover:text-blue-800'>About Me</Link>
							</li>
							<li>
								<Link href={'/'} className='hover:font-bold hover:text-blue-800'>Portfolio</Link>
							</li>
							<li>
								<Link href={'/'} className='hover:font-bold hover:text-blue-800'>Experience</Link>
							</li>
							<li>
								<Link href={'/'} className='hover:font-bold hover:text-blue-800'>Contact</Link>
							</li>
						</ul>
					</nav>
				</header>

				<main className='w-4/5 mx-auto'>
					{children}
				</main>

				<footer>
					<span></span>
				</footer>
			</body>
    </html>
  )
}
