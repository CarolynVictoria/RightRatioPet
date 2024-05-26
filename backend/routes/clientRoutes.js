import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Client from '../models/clientModel.js';

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const clients = await Client.find({});
		res.json(clients);
	})
);

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const client = await Client.findById(req.params.id);
		if (client) {
			return res.json(client);
		}
		res.status(404).json({ message: 'Client not found.' });
	})
);

export default router;
