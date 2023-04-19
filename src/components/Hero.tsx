"use client" 

import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/profile.jpg';
import { TypeAnimation } from 'react-type-animation';


export default function Hero() {
	return (
		<section className='text-center text-white mt-16'>
			<div className='w-[25rem] h-[25rem] relative mx-auto'>
				<div className="absolute w-full h-full top-0 left-0 animate-spin-slow z-10">
					<div className="w-[80px] h-[80px] rounded-full bg-main-color flex items-center text-center justify-center uppercase absolute left-m40px top-spin">react</div>
					<div className="w-[80px] h-[80px] rounded-full bg-color-1 flex items-center text-center justify-center uppercase absolute right-m40px top-spin">java<br/>script</div>
					<div className="w-[80px] h-[80px] rounded-full bg-color-2 flex items-center text-center justify-center uppercase absolute top-m40px left-spin">scss</div>
					<div className="w-[80px] h-[80px] rounded-full bg-dark-700 flex items-center text-center justify-center uppercase absolute bottom-m40px left-spin">Type<br/>Script</div>
				</div>
				<Image className='rounded-full mx-auto' src={profileImage} alt="Picture of the author" fill priority />
			</div>
			<h2 className='text-3xl font-bold mt-16'>{"Hi, I'm Yewon!"}</h2>
			<h3 className='text-xl font-semibold mt-4'>Frontend Engineer</h3>
			<p>안녕하세요! 주니어 프론트엔드 개발자<br/>전예원의 포트폴리오 입니다.</p>
			<Link href="/contact">
				<button className='bg-main-color font-bold rounded-full py-1 px-6 h-12 mt-4 border-solid border border-main-color hover:bg-dark-800 hover:text-main-color transition-all'>Contact Me</button>
			</Link>
		</section>
	)
}
