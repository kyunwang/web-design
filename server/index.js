import express from 'express';

import path from 'path';
import bodyParser from 'body-parser';
import nunjucks from 'nunjucks';
import session from 'express-session';

import helpers from './config/helpers';

require('dotenv').config({ path: './vars.env' });

const app = express();

import routes from './routes';

// Setting the view engine
app.set('view engine', 'html');
nunjucks.configure('./server/views', {
	autoescape: true,
	express: app,
	watch: true
});

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: false,
		// maxAge: 30000,  // 30sec
		maxAge: 600000,  // 10min
	}
 }));

// Set static route
app.use('/', express.static(path.join(__dirname, '../public')));
// app.use('/', express.static(path.join(__dirname, '../public'), { maxAge: '31d' })); // This will cache the folder for 31days

// Use bodyparser
app.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }));


// Add global middleware available in templates and all routes
app.use((req, res, next) => {
	res.locals.h = helpers;
	// Temporary storage for prototype
	res.locals.news = req.session.news;
	res.locals.bookmarks = req.session.bookmarks;
	next();
});

app.use('/', routes);

app.listen(process.env.PORT, function() {
	console.log('Listening to port: ', process.env.PORT);
});
