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
	// If there is no selected news redirect to intro
	// if () {}

	res.render('homePage', {
		message: 'Hello Server',
		headlines: req.headline && req.headline
	});
}

exports.introPage = (req, res) => {
	res.render('introPage');
}

exports.introPage2 = (req, res) => {
	res.render('introPage2');
}

exports.introPage3 = (req, res) => {
	res.render('introPage3');
}