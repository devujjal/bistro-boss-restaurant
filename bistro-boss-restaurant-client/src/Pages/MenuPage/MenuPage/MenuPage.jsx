import { Helmet } from 'react-helmet-async';
import Cover from '../../../Components/Cover/Cover';


const MenuPage = () => {
    return (
        <>
            <Helmet>
                <title>Our Menu - Bistro Boss</title>
                <meta name="description" content="Explore the menu of Bistro Boss. From appetizers to main courses, discover the best dishes crafted for you!" />
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>

            <section>
                <div>
                    <Cover img={'https://i.ibb.co.com/6t3JBX3/banner3.jpg'}/>
                </div>
            </section>
        </>
    );
};

export default MenuPage;