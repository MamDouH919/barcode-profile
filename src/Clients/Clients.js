import clients from '../clients.json';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import InfoQr from './typesOfQr/InfoQr';
import MenuQr from './typesOfQr/MenuQr';

function Clients() {
    const { id } = useParams()
    const client = clients[id]


    if (!client || client.disable) return <NotFound />

    return client.menuQr ? (<MenuQr client={client} id={id} />) : (
        <InfoQr client={client} id={id} />
    )
}

export default Clients