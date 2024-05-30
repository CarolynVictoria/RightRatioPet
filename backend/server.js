import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import clientRoutes from './routes/clientRoutes.js';
import userRoutes from './routes/userRoutes.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.use('/api/clients', clientRoutes);
app.use('/api/users', userRoutes);

if (process.env.NODE_ENV ==='PRODUCTION') {
	//	Set static folder
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	//	Any route that is not api	will be redirected to index.html
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
} else{
	app.get('/', (req, res) => {
		res.send('API is running...');
	});
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
