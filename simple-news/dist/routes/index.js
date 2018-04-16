'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _newsController = require('../controllers/newsController');

var _newsController2 = _interopRequireDefault(_newsController);

var _bookmarkController = require('../controllers/bookmarkController');

var _bookmarkController2 = _interopRequireDefault(_bookmarkController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/intro', _newsController2.default.introPage);

router.get('/intro-2', _newsController2.default.introPage2);

router.get('/intro-3', _newsController2.default.introPage3);

router.get('/', _newsController2.default.getNews, _newsController2.default.homePage);

router.get('/bookmarks', _bookmarkController2.default.myBookmarks);

router.post('/bookmarks', _bookmarkController2.default.handleBookmark, _bookmarkController2.default.updateBookmark);

exports.default = router;
//# sourceMappingURL=index.js.map