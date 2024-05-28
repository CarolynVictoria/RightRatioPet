import asyncHandler from '../middleware/asyncHandler.js';
import Client from '../models/clientModel.js';

// @desc    Fetch all clients
// @route   GET /api/clients
// @access  Public
const getClients = asyncHandler(async (req, res) => {
 		const clients = await Client.find({});
		res.json(clients);
});

// @desc    Fetch single client
// @route   GET /api/clients/:id
// @access  Public
const getClientById = asyncHandler(async (req, res) => {
			const client = await Client.findById(req.params.id);

			if (client) {
				return res.json(client);
			} else {
				res.status(404);
				throw new Error('Resource not found.');
			}
});

export { getClients, getClientById }