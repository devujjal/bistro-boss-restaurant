import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";

const ShopPage = () => {
    return (
        <>
            <Helmet>
                <title>Our Shop - Bistro Boss</title>
                <meta name="description" content="Explore the menu of Bistro Boss. From appetizers to main courses, discover the best dishes crafted for you!" />
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>

            <section className='mb-20'>
                <div>
                    <Cover
                        img={'https://i.ibb.co.com/sKLFYWf/banner2.jpg'}
                        heading={'OUR SHOP'}
                        des={'Would you Like to try a dish?'}
                    />
                </div>

            </section>
        </>
    );
};

export default ShopPage;