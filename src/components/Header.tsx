import Link from 'next/link';

export default function Header() {
	return (
		<header className='flex justify-between items-center p-4 text-white'>
			<Link href="/">
				<h1 className='text-3xl font-bold'>{"Yewon's Blog"}</h1>
			</Link>
			<nav className='flex gap-5'>
				<Link className='hover:underline hover:decoration-main-color hover:text-main-color' href="/">Home</Link>
				<Link className='hover:underline hover:decoration-main-color hover:text-main-color' href="/about">About</Link>
				<Link className='hover:underline hover:decoration-main-color hover:text-main-color' href="/portfolio">Portfolio</Link>
				<Link className='hover:underline hover:decoration-main-color hover:text-main-color' href="/posts">Posts</Link>
				<Link className='hover:underline hover:decoration-main-color hover:text-main-color' href="/contact">Contact Me</Link>
			</nav>
		</header>
	)
}
