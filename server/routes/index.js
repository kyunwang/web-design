import express from 'express';
import newsController from '../controllers/newsController';

const router = express.Router();

// Need to wrap in a error handler
router.get('/',
	newsController.getNews,
	newsController.homePage
);

export default router;