exports.handleBookmark = (req, res, next) => {
	const bookmarkArticle = req.session.news.articles.filter(article => (`item-${article.publishedAt}`) === req.body.id);

	// If the article exists in res.local.bookmarks remove it
	// Else add it
	// if (bookmarkArticle ...) {}
	res.locals.bookmarks.push(bookmarkArticle);
	
	next();
}

exports.updateBookmark = (req, res) => {
	// console.log('marks', req.session, res.locals);
	
	res.json({ bookmarks: res.locals.bookmarks });
};