import { Helmet } from 'react-helmet-async';


const MenuPage = () => {
    return (
        <>
            <Helmet>
                <title>Our Menu - Bistro Boss</title>
                <meta name="description" content="Explore the menu of Bistro Boss. From appetizers to main courses, discover the best dishes crafted for you!" />
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>

            <section>
                <div className="container mx-auto">
                    <div className="px-6 py-32 md:px-24">
                        <h1>hello WOrd</h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MenuPage;