import { useParams } from 'react-router-dom';
import clients from '../clients';

const ClientScreen = () => {
	const { id: clientId } = useParams();
	const client = clients.find((c) => c._id === clientId);
	console.log(client);

	return <div>ClientScreen</div>;
};

export default ClientScreen;
