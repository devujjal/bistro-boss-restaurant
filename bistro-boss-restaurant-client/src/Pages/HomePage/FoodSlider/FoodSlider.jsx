import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './FoodSlider.css'

const FoodSlider = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className='px-24 py-14'>
                    <div>

                    </div>
                    <div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://i.ibb.co.com/WW5KfNv/slide1.jpg" alt="" />
                                <span>Salads</span>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co.com/wcYTQHh/slide2.jpg" alt="" />
                                <span>Soups</span>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co.com/nnTbqvX/slide3.jpg" alt="" />
                                <span>Pizzas</span>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co.com/G7zqjq9/slide4.jpg" alt="" />
                                <span>Desserts</span>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co.com/WW5KfNv/slide1.jpg" alt="" />
                                <span>Salads</span>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodSlider;