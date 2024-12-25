import { Helmet } from 'react-helmet-async';
import Cover from '../../../Components/Cover/Cover';
import Offer from '../Shared/Offer/Offer';


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

            <section>
                <div className='container mx-auto'>
                    <div className='px-6 py-3 md:px-24'>
                        <Offer categoryName={'popular'} heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default MenuPage;