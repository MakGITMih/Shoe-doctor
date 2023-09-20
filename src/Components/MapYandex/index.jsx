import './mapYandex.scss'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function MapYandex() {
    return (
        <>
            <section className="map">
                <YMaps>
                    {/* <div>My awesome application with maps!</div> */}
                    <Map defaultState={{
                        center: [59.827727, 30.327034], zoom: 15,
                    }}
                        width='100%'
                    //  height="300px"
                    >
                        <Placemark geometry={[59.827694, 30.327079]} />
                    </Map>
                </YMaps>
            </section>
        </>
    );
}

export default MapYandex;