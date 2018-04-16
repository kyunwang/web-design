'use strict';

exports.handleBookmark = (req, res, next) => {
	const bookmarkArticle = req.session.news.articles.filter(article => {
		return `item-${article.publishedAt}` === req.body.id;
	});

	// If the article exists in res.local.bookmarks remove it
	// Else add it
	// if (bookmarkArticle ...) {}
	req.session.bookmarks.push(bookmarkArticle[0]);

	next();
};

exports.updateBookmark = (req, res) => {
	res.json({ bookmarks: res.locals.bookmarks });
};

exports.myBookmarks = (req, res) => {
	res.render('homePage', {
		pageTitle: 'My bookmarks',
		articles: res.locals.bookmarks && res.locals.bookmarks
	});
};
//# sourceMappingURL=bookmarkController.js.map