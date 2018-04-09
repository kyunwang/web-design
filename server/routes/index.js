import express from 'express';
import newsController from '../controllers/newsController';

const router = express.Router();

router.get('/', newsController.homePage);

export default router;