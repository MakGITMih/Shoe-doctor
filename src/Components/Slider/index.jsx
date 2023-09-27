import './slider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import slider1 from './slider1.jpg'
import slider2 from './slider2.jpg'
import slider3 from './slider3.jpg'
import slider4 from './slider4.jpg'

const arr = [
    {
        image: slider1,
        title: 'Неожиданно коты'
    },
    {
        image: slider2,
        title: 'И еще коты'
    },
    {
        image: slider3,
        title: 'Опять немного котов'
    },
    {
        image: slider4,
        title: 'И наконец много котов!'
    },
]


function Slider() {
    return (
        <section className='slider'>
            <div className='slider__container'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    grabCursor true
                    loop={true}
                    speed={800}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                >
                    {arr.map((item) => (
                        <SwiperSlide key={item.image}>
                            <h3 className='slider__subtitle'>{item.title}</h3>
                            <div className='slider__img-wrap'>
                                <img className='slider__imges' src={item.image} alt={item.title} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Slider;
