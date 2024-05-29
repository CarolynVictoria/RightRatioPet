import asyncHandler from '../middleware/asyncHandler.js';
import Client from '../models/clientModel.js';

// @desc    Fetch all clients
// @route   GET /api/clients
// @access  Public
const getClients = asyncHandler(async (req, res) => {
	const pageSize = 50;
	const page = Number(req.query.pageNumber) || 1;
	const count = await Client.countDocuments();

	const clients = await Client.find({})
		.sort({ submissionDate: -1 }) // Sort by submissionDate descending (newest first)
		.limit(pageSize)
		.skip(pageSize * (page - 1));
	res.json({ clients, page, pages: Math.ceil(count / pageSize) });
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

export { getClients, getClientById };
