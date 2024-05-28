import express from 'express';
const router = express.Router();
import { getClients, getClientById	} from '../controllers/clientController.js';

router.route('/').get(getClients);
router.route('/:id').get(getClientById);

export default router;
