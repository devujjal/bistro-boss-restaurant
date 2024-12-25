import { Helmet } from 'react-helmet-async';
import Cover from '../../../Components/Cover/Cover';
import Offer from '../Shared/Offer/Offer';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const MenuPage = () => {


    return (
        <>
            <Helmet>
                <title>Our Menu - Bistro Boss</title>
                <meta name="description" content="Explore the menu of Bistro Boss. From appetizers to main courses, discover the best dishes crafted for you!" />
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>

            <section className='mb-20'>
                <div>
                    <Cover
                        img={'https://i.ibb.co.com/6t3JBX3/banner3.jpg'}
                        heading={'OUR MENU'}
                        des={'Would you Like to try a dish?'}
                    />
                </div>

            </section>

            <section className='mb-20'>
                <div className='container mx-auto'>
                    <div className='px-6 py-3 md:px-24'>
                        <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />

                        <Offer categoryName={'popular'} />
                    </div>
                </div>
            </section>

            <section className='mb-20'>
                <div>
                    <Cover
                        img={'https://i.ibb.co.com/dcvMV2p/dessert-bg.jpg'}
                        heading={'DESSERTS'}
                        des={'Desserts are the perfect way to end your meal on a sweet note! From rich, creamy cakes to delightful pastries and refreshing ice creams, our selection of desserts is crafted to satisfy every craving. Indulge in a treat that is as delicious as it is irresistible!'}
                        style={true}
                    />
                </div>
            </section>

            <section className='mb-20'>
                <div className='container mx-auto'>
                    <div className='px-6 py-3 md:px-24'>
                        <Offer categoryName={'dessert'} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default MenuPage;