import './mapYandex.scss'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function MapYandex() {
    return (
        <>
            <section className="map">
                <YMaps>
                    <Map defaultState={{
                        center: [59.827727, 30.327034], zoom: 15,
                    }}
                        width='100%'
                        height="400px"
                    >
                        <Placemark geometry={[59.827694, 30.327079]}></Placemark>
                    </Map>
                </YMaps>
            </section>
        </>
    );
}

export default MapYandex;