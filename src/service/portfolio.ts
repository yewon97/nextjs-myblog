import { readFile } from 'fs/promises';
import path from 'path';

export type Portfolio = {
	title : string;
	demo : string;
	source: string;
	description : string;
	startDate : Date;
	endDate : Date;
	status : string;
	stacks : string[];
	path : string;
	featured : boolean;
}

export type PortfolioData = Portfolio & {content : string};

export async function getFeaturedPortfolio() : Promise<Portfolio[]> {
	return getAllPortfolio() //
		.then(portfolio => portfolio.filter(portfolio => portfolio.featured));
}

export async function getNonFeaturedPortfolio() : Promise<Portfolio[]> {
	return getAllPortfolio() //
		.then(portfolio => portfolio.filter(portfolio => !portfolio.featured));
}

export async function getAllPortfolio() : Promise<Portfolio[]> {
	const filePath = path.join(process.cwd(), 'data', 'portfolio.json');
	return readFile(filePath, 'utf-8')
		.then<Portfolio[]>(JSON.parse)
		.then(portfolio => portfolio.sort((a, b) => (a.startDate > b.startDate ? -1 : 1)));
}

export async function getPortfolioData(fileName : string) : Promise<PortfolioData> {
	const filePath = path.join(process.cwd(), 'data', 'portfolio', `${fileName}.md`);
	const metadata = await getAllPortfolio() //
		.then(portfolio => portfolio.find(portfolio => portfolio.path === fileName));
		
	if(!metadata) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

	const content = await readFile(filePath, 'utf-8');
	return {...metadata, content};
}