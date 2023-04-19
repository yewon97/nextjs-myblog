'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation,A11y } from 'swiper';
import "swiper/swiper-bundle.css";
import { Portfolio } from '@/service/portfolio';
import Link from 'next/link';

export default function PortfolioGrid({portfolios} : {portfolios : Portfolio[]}) {
	return (
		<div className='relative flex flex-col items-start pb-6'>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				slidesPerView={3}
				spaceBetween={20}
				className="mt-6 w-full static portfolio-grid"
				pagination={{ clickable: true }}
				navigation
			>
				{
					portfolios.map((portfolio => (
						<SwiperSlide key={portfolio.path}>
							<article className='rounded-md overflow-hidden shadow-md hover:shadow-xl bg-dark-700'>
								<div className='relative w-full h-60'>
									<Image className="object-cover object-top" src={`/images/portfolio/${portfolio.path}.png`} alt={portfolio.title} fill />
								</div>
								<div className='flex flex-col items-center p-5'>
									<time className='self-end text-xs'>{portfolio.startDate.toString()} ~ {portfolio.endDate.toString() || portfolio.status}</time>
									<h3 className='text-lg font-bold'>{portfolio.title}</h3>
									<p className='w-full truncate text-center'>{portfolio.description}</p>
									<ul className='flex gap-2 mt-2'>
										{
											portfolio.stacks.map(stack => (<li key={stack}>
												<span className='bg-[#666] py-1 px-2 rounded-md text-xs'>{stack}</span>
											</li>))
										}
									</ul>
									<div className='flex gap-3'>
										<Link href={portfolio.demo} target='_blank' className='bg-color-1 font-bold rounded-full py-1 px-4 h-8 mt-4 border-solid border border-color-1 hover:bg-dark-800 hover:text-color-1 transition-all flex items-center'>Demo</Link>
										<Link href={portfolio.source} target='_blank' className='bg-color-2 font-bold rounded-full py-1 px-4 h-8 mt-4 border-solid border border-color-2 hover:bg-dark-800 hover:text-color-2 transition-all flex items-center'>Source</Link>
									</div>
								</div>
							</article>
						</SwiperSlide>
					)))
				}
			</Swiper>
		</div>
	)
}
