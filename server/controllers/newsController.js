require('dotenv').config({ path: './vars.env' });

import NewsApi from 'newsapi';
const newsapi = new NewsApi(process.env.API_KEY);

exports.getNews = async (req, res, next) => {
	// if we have the session in the servermemory for the prototype
	// Skip fetching the data from the api

	if (!req.session.news) {
		console.debug('Making a API call');
		
		req.headline = await newsapi.v2.topHeadlines({
			// sources: 'bbc-news,the-verge',
			// q: 'iphone',
			category: 'technology',
			language: 'en',
			country: 'us'
		});
	
		req.session.news = req.headline;
	}
	
	next();
}

exports.homePage = (req, res) => {
	// If there is no selected news redirect to intro
	// if () {}

	if (!req.session.bookmarks) {
		req.session.bookmarks = [];
	}
	if (!req.session.news) {
		req.session.news = [];
	}

	res.render('homePage', {
		pageTitle: 'English news',
		articles: req.session.news.articles && req.session.news.articles
	});
}

/*==========================
=== Intro pages / onboardingish
===========================*/

exports.introPage = (req, res) => {
	res.render('introPage');
}

exports.introPage2 = (req, res) => {
	res.render('introPage2');
}

exports.introPage3 = (req, res) => {
	res.render('introPage3');
}
