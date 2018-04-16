import express from 'express';
import newsController from '../controllers/newsController';
import bookmarkController from '../controllers/bookmarkController';

const router = express.Router();

router.get('/intro', newsController.introPage);

router.get('/intro-2', newsController.introPage2);

router.get('/intro-3', newsController.introPage3);

router.get('/',
	newsController.getNews,
	newsController.homePage
);

router.get('/bookmarks', bookmarkController.myBookmarks);

router.post('/bookmarks',
	bookmarkController.handleBookmark,
	bookmarkController.updateBookmark
);

export default router;