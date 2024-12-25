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

            <section className='mb-20'>
                <div>
                    <Cover
                        img={'https://i.ibb.co.com/ZL8P5b4/pizza-bg.jpg'}
                        heading={'PIZZA'}
                        des={'Pizza is the ultimate comfort food, loaded with delicious toppings, gooey cheese, and a perfectly baked crust. Whether you love classic flavors or bold, creative combinations, our pizzas are made fresh to bring joy to every bite. Share it with friends or enjoy it all to yourself!'}
                        style={true}
                    />
                </div>
            </section>

            <section className='mb-20'>
                <div className='container mx-auto'>
                    <div className='px-6 py-3 md:px-24'>
                        <Offer categoryName={'pizza'} />
                    </div>
                </div>
            </section>

            <section className='mb-20'>
                <div>
                    <Cover
                        img={'https://i.ibb.co.com/KFMp6Sn/salad-bg.jpg'}
                        heading={'SALADS'}
                        des={'Salads are a refreshing and healthy choice, packed with crisp greens, vibrant vegetables, and flavorful dressings. Whether you’re looking for a light meal or a tasty side, our salads are freshly prepared to delight your taste buds and nourish your body'}
                        style={true}
                    />
                </div>
            </section>

            <section className='mb-20'>
                <div className='container mx-auto'>
                    <div className='px-6 py-3 md:px-24'>
                        <Offer categoryName={'salad'} />
                    </div>
                </div>
            </section>

            <section className='mb-20'>
                <div>
                    <Cover
                        img={'https://i.ibb.co.com/HF9BwgN/soup-bg.jpg'}
                        heading={'SOUPS'}
                        des={'Soups are the perfect comfort food, warm and full of flavor. Whether you prefer creamy textures or hearty broths, our soups are made fresh with quality ingredients to satisfy and soothe. Enjoy a bowl that feels like a warm hug in every sip!'}
                        style={true}
                    />
                </div>
            </section>

            <section className='mb-10'>
                <div className='container mx-auto'>
                    <div className='px-6 py-3 md:px-24'>
                        <Offer categoryName={'soup'} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default MenuPage;