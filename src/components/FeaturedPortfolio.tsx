import { getFeaturedPortfolio, getNonFeaturedPortfolio } from '@/service/portfolio';
import PortfolioGrid from './PortfolioGrid';
import PortfolioView from './PortfolioView';

export default async function FeaturedPortfolio() {
	const featuredPortfolio = await getFeaturedPortfolio();
	const nonFeaturedPortfolios = await getNonFeaturedPortfolio();

	return (
		<section className='text-white mt-16'>
			<h2 className='text-3xl font-bold mb-5 border-s-4 border-indigo-500 ps-4'>Featured Portfolio</h2>
			<PortfolioView portfolio={featuredPortfolio} />
			<PortfolioGrid portfolios={nonFeaturedPortfolios} />
		</section>
	)
}
