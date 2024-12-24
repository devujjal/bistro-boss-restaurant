import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './ParallexSection.css';


const ParallexSection = () => {
    return (
        <section className='mb-20'>
            <div>
                <div className="mains-container">
                    <div className='bg-opacity-60 bg-[#1B1B1D]'>
                        <div className='container mx-auto px-6 py-32 md:px-24'>
                            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'} text={true} />

                            <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-10'>
                                <div className='w-full'>
                                    <img src="https://i.ibb.co.com/FWV8bg4/featured.jpg" className='w-full' alt="" />
                                </div>
                                <div className='text-white space-y-1'>
                                    <span className='text-lg'>December 24, 2024</span>
                                    <h3 className='text-xl'>WHERE CAN I GET SOME?</h3>
                                    <p>You can visit us at Bistro Boss, where we are open every day to serve you delicious meals made with fresh ingredients. Or, if you prefer, you can order online for quick delivery straight to your doorstep, so you can enjoy our meals from the comfort of your home!</p>

                                    <button className="text-white font-inter text-base md:text-lg py-3 px-4 border-b-2 rounded-b-md border-white">Read More</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParallexSection;