const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const error = require('./middleware/error');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: '*',
	})
);

//route imports
const user = require('./routes/userRoute');
const resume = require('./routes/resumeRoute');
const template = require('./routes/templateRoute');
const recommended = require('./routes/recommendedRoute');

app.use('/api/v1', user);
app.use('/api/v1', resume);
app.use('/api/v1', template);
app.use('/api/v1', recommended);

//middleware for error
app.use(error);

module.exports = app;
