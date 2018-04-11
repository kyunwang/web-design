require('dotenv').config({ path: './vars.env' });

import NewsApi from 'newsapi';
const newsapi = new NewsApi(process.env.API_KEY);

exports.getNews = async (req, res, next) => {
	// return next();

	req.headline = await newsapi.v2.topHeadlines({
		// sources: 'bbc-news,the-verge',
		// q: 'iphone',
		category: 'technology',
		language: 'en',
		country: 'us'
	});

	next();
}

exports.homePage = (req, res) => {
	res.render('homePage', {
		message: 'Hello Server',
		headlines: req.headline && req.headline
	});
}