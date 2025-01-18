import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './FoodSlider.css';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const FoodSlider = () => {
    return (
        <section className='my-10'>
            <div className='container mx-auto'>
                <div className='px-6 py-3 md:px-24'>
                    <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'ORDER ONLINE'}/>

                    <div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper z-0"
                        >
                            <SwiperSlide className='relative'>
                                <img src="https://i.ibb.co.com/WW5KfNv/slide1.jpg" alt="" />
                                <h4 className='absolute font-cinzel text-lg md:text-xl text-white w-full bottom-5 text-center'>Salads</h4>
                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src="https://i.ibb.co.com/wcYTQHh/slide2.jpg" alt="" />
                                <h4 className='absolute font-cinzel text-lg md:text-xl text-white w-full bottom-5 text-center'>Soups</h4>
                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src="https://i.ibb.co.com/nnTbqvX/slide3.jpg" alt="" />
                                <h4 className='absolute font-cinzel text-lg md:text-xl text-white w-full bottom-5 text-center'>Pizzas</h4>
                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src="https://i.ibb.co.com/G7zqjq9/slide4.jpg" alt="" />
                                <h4 className='absolute font-cinzel text-lg md:text-xl text-white w-full bottom-5 text-center'>Desserts</h4>
                            </SwiperSlide>
                            <SwiperSlide className='relative'>
                                <img src="https://i.ibb.co.com/WW5KfNv/slide1.jpg" alt="" />
                                <h4 className='absolute font-cinzel text-lg md:text-xl text-white w-full bottom-5 text-center'>Salads</h4>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodSlider;