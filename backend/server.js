import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import clients from './data/clients.js';
const port = process.env.PORT || 5000;

connectDB(); // Connect to Mongo

const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.get('/api/clients', (req, res) => {
	res.json(clients);
});

app.get('/api/clients/:id', (req, res) => {
	const client = clients.find((c) => c._id === req.params.id);
	res.json(client);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
