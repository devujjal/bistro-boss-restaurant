import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './FoodSlider.css';

const FoodSlider = () => {
    return (
        <section className='py-10'>
            <div className='container mx-auto'>
                <div className='px-6 py-3 md:px-24'>
                    <div className='text-center font-inter mb-8'>
                        <span className='text-[#D99904] mb-2 block'>---From 11:00am to 10:00pm---</span>
                        <div className="relative py-5 md:py-7">
                            <h3 className="relative z-10 text-center text-[#151515] text-2xl font-medium">ORDER ONLINE</h3>

                            <div
                                className="absolute w-[300px] h-[3px] bg-[#E8E8E8] left-[50%] transform -translate-x-1/2 top-[5px] md:top-[12px] md:w-[250px]">
                            </div>

                            <div
                                className="absolute w-[300px] h-[3px] bg-[#E8E8E8] left-[50%] transform -translate-x-1/2 top-[65px] sm:w-[200px] md:top-[70px] md:w-[250px]">
                            </div>
                        </div>

                    </div>
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