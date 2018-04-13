'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _helpers = require('./config/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config({ path: './vars.env' });

const app = (0, _express2.default)();

// Setting the view engine
app.set('view engine', 'html');
_nunjucks2.default.configure('./server/views', {
	autoescape: true,
	express: app,
	watch: true
});

app.use((0, _expressSession2.default)({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: false,
		// maxAge: 30000,  // 30sec
		maxAge: 600000 // 10min
	}
}));

// Set static route
app.use('/', _express2.default.static(_path2.default.join(__dirname, '../public')));
// app.use('/', express.static(path.join(__dirname, '../public'), { maxAge: '31d' })); // This will cache the folder for 31days

// Use bodyparser
app.use(_bodyParser2.default.json()).use(_bodyParser2.default.urlencoded({ extended: false }));

// Add global middleware available in templates and all routes
app.use((req, res, next) => {
	res.locals.h = _helpers2.default;
	// Temporary storage for prototype
	res.locals.news = req.session.news;
	res.locals.bookmarks = req.session.bookmarks;
	next();
});

app.use('/', _routes2.default);

app.listen(process.env.PORT, function () {
	console.log('Listening to port: ', process.env.PORT);
});
//# sourceMappingURL=index.js.map