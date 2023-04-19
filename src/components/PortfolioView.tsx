import Image from 'next/image';
import Link from 'next/link';
import portfolioViewImg from '../../public/images/portfolio/postal.png';
import { Portfolio } from '@/service/portfolio';

export default function PortfolioView({portfolio} : {portfolio : Portfolio[]}) {
	const {
    title,
    demo,
    source,
    description,
    startDate,
    endDate,
    status,
    stacks,
		path
  } = portfolio[0];

	return (
		<div className="flex relative flex-row-reverse justify-between">
			<div className="">
				<div className='relative aspect-video w-[50rem] bg-dark-700'>
					<Image className="w-full shadow-lg object-contain" src={`/images/portfolio/${path}.png`} alt={title} fill priority />
				</div>
			</div>
			<div className="flex flex-col items-start justify-center">
				<ul className='flex gap-2 mb-4'>
					{
						stacks.map(stack => (<li key={stack}>
							<span className='bg-[#666] py-1 px-2 rounded-md font-bold'>{stack}</span>
						</li>))
					}
				</ul>
				<h3 className='text-6xl font-bold'>{title}</h3>
				<p className="text-base leading-md text-white-800 mt-8">{description}</p>
				<div className='flex gap-x-3 mt-14'>
					<Link href={demo} target='_blank' className='bg-color-1 font-bold rounded-full py-1 px-6 h-12 mt-4 border-solid border border-color-1 hover:bg-dark-800 hover:text-color-1 transition-all flex items-center'>Demo</Link>
					<Link href={source} target="_blank" className='bg-color-2 font-bold rounded-full py-1 px-6 h-12 mt-4 border-solid border border-color-2 hover:bg-dark-800 hover:text-color-2 transition-all flex items-center'>Source</Link>
				</div>
			</div>
		</div>
	)
}
