import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import { Navigation } from 'swiper/modules';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';


const Testimonial = () => {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section>
            <div className="container mx-auto">
                <div className="px-6 py-3 md:px-24">
                    <SectionTitle heading={'TESTIMONIALS'} subHeading={'What Our Clients Say'} />

                    <div>
                        <Swiper 
                        navigation={true}
                         modules={[Navigation]}
                          className="mySwiper">
                            {
                                reviews.map(review => <SwiperSlide key={review._id}>
                                    <div className='flex flex-col justify-center items-center space-y-5'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review?.rating}
                                            readOnly
                                        />
                                        <div>
                                            <img src="https://i.ibb.co.com/fvKx26y/quote-left-1.png" alt="" />
                                        </div>
                                        <div className='font-inter text-center px-10 md:px-20 md:w-[60%]'>
                                            <p className='pb-3 text-sm md:text-base'>{review?.details}</p>
                                            <span className='text-2xl text-[#CD9003]'>{review?.name}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                )
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;