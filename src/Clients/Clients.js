import clients from '../clients.json';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
// import InfoQr from './typesOfQr/InfoQr';
import MenuQr from './typesOfQr/MenuQr';
import QrCodeProfile from './typesOfQr/QrCodeProfile';
import { Suspense, useState, useEffect, useLayoutEffect } from "react";

function Clients({ idDomain }) {
    const { id } = useParams()
    const client = clients[id ?? idDomain]
    useLayoutEffect(() => {
        if (id === "bait-ward") {
            window.location.href = "https://betward.city-app.org/loading";
        }

        return () => { };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!client || client.disable) return <NotFound />



    if (client.customComp) {
        return <DynamicComponent compName={client.customComp} client={client} id={id} haveDomain={!!idDomain} />;
    }



    return client.menuQr ? (<MenuQr client={client} id={id} />) : (
        <QrCodeProfile client={client} id={id} haveDomain={!!idDomain} />
    )
}

export default Clients



const DynamicComponent = ({ compName, client, id, idDomain }) => {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        if (compName) {
            import(`./typesOfQr/${compName}`)
                .then((mod) => {
                    setComponent(() => mod.default)
                })
                .catch((err) => console.error("Error loading component:", err));
        }
    }, [compName]);

    if (!Component) return <div>Loading...</div>;

    return (
        <Suspense fallback={<div>Loading Component...</div>}>
            <Component client={client} id={id} haveDomain={!!idDomain} />
        </Suspense>
    );
};
