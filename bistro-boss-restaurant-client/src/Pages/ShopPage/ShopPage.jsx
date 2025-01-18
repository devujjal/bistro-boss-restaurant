import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
// import useMenuDatas from "../../Hooks/useMenuDatas";
// import TabContentCard from "../../Components/TabContentCard/TabContentCard";
import SaladPaginnation from "../../Components/SaladPagination/SaladPagination";

const ShopPage = () => {

    // const { datas,  } = useMenuDatas();
    const [activeTab, setActiveTab] = useState('Salad'); // Tracks the active tab
    // const salads = datas.filter(salad => salad.category === 'salad');
    // const pizzas = datas.filter(pizza => pizza.category === 'pizza');
    // const soups = datas.filter(soup => soup.category === 'soup');
    // const desserts = datas.filter(dessert => dessert.category === 'dessert');
    // const drinks = datas.filter(drink => drink.category === 'drinks');

    

    return (
        <>
            <Helmet>
                <title>Our Shop - Bistro Boss</title>
                {/* <meta name="description" content="Explore the menu of Bistro Boss. From appetizers to main courses, discover the best dishes crafted for you!" /> */}
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

            <section className='mb-20'>
                <div className='container mx-auto'>
                    <div className='px-6 py-3 md:px-24'>

                        <div className="px-4">
                            {/* Tab List */}
                            <ul className="flex justify-center items-center flex-wrap font-inter">
                                <li
                                    className={`tab ${activeTab === 'Salad'
                                        ? 'text-[#BB8506] font-bold border-b-2 border-[#BB8506]'
                                        : 'text-gray-600 font-semibold border-b-2 border-transparent'
                                        } text-[15px] py-2.5 px-5 cursor-pointer`}
                                    onClick={() => setActiveTab('Salad')}
                                >
                                    Salad
                                </li>
                                <li
                                    className={`tab ${activeTab === 'Pizza'
                                        ? 'text-[#BB8506] font-bold border-b-2 border-[#BB8506]'
                                        : 'text-gray-600 font-semibold border-b-2 border-transparent'
                                        } text-[15px] py-2.5 px-5 cursor-pointer`}
                                    onClick={() => setActiveTab('Pizza')}
                                >
                                    Pizza
                                </li>
                                <li
                                    className={`tab ${activeTab === 'Soups'
                                        ? 'text-[#BB8506] font-bold border-b-2 border-[#BB8506]'
                                        : 'text-gray-600 font-semibold border-b-2 border-transparent'
                                        } text-[15px] py-2.5 px-5 cursor-pointer`}
                                    onClick={() => setActiveTab('Soups')}
                                >
                                    Soups
                                </li>
                                <li
                                    className={`tab ${activeTab === 'Desserts'
                                        ? 'text-[#BB8506] font-bold border-b-2 border-[#BB8506]'
                                        : 'text-gray-600 font-semibold border-b-2 border-transparent'
                                        } text-[15px] py-2.5 px-5 cursor-pointer`}
                                    onClick={() => setActiveTab('Desserts')}
                                >
                                    Desserts
                                </li>
                                <li
                                    className={`tab ${activeTab === 'Drinks'
                                        ? 'text-[#BB8506] font-bold border-b-2 border-[#BB8506]'
                                        : 'text-gray-600 font-semibold border-b-2 border-transparent'
                                        } text-[15px] py-2.5 px-5 cursor-pointer`}
                                    onClick={() => setActiveTab('Drinks')}
                                >
                                    Drinks
                                </li>

                            </ul>

                            {/* Tab Content */}
                            <div className="mt-8">
                                {activeTab === 'Salad' && (
                                   
                                    // <TabContentCard items={salads} />
                                    <SaladPaginnation itemName={'salad'} />
                                  
                                )}
                                {activeTab === 'Pizza' && (

                                //    <TabContentCard items={pizzas}/>
                                <SaladPaginnation itemName={'pizza'} />


                                )}
                                {activeTab === 'Soups' && (
                                    
                                    // <TabContentCard items={soups}/>
                                    <SaladPaginnation itemName={'soup'} />

                                )}
                                {activeTab === 'Desserts' && (
                                    // <TabContentCard items={desserts}/>
                                    <SaladPaginnation itemName={'dessert'} />

                                )}
                                {activeTab === 'Drinks' && (
                                    // <TabContentCard items={drinks}/>
                                    <SaladPaginnation itemName={'drinks'} />

                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopPage;