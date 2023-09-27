import './gallery.scss'

import Slider from '../../Components/Slider';

function Gallery() {
    return (
        <>
            <section className="gallery">
                <Slider className="gallery-slider" ></Slider>
            </section>
        </>
    );
}

export default Gallery;