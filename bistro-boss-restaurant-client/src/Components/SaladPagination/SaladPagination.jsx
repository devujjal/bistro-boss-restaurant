import { useEffect, useState } from "react";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import SaladCard from "../SaladCard/SaladCard";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";


const SaladPagination = ({ itemName }) => {

    const axiosSecure = useAxiosCommon();
    const [foodItems, setFoodItems] = useState([])
    const [loading, setLoading] = useState(true);
    const [itemsCount, setItemsCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0);
    const counts = Array(6).fill(null);


    const perPageItems = 6;
    const pagesNumber = foodItems ? Math.ceil(itemsCount / perPageItems) : 0;

    const pages = [...Array(pagesNumber).keys()]

    console.log(itemsCount, pagesNumber)
    console.log(pages)



    useEffect(() => {
        axiosSecure.get(`/menu?category=${itemName}&page=${currentPage}&size=${perPageItems}`)
            .then(res => {
                setFoodItems(res.data);
                setLoading(false)
            })
    }, [axiosSecure, currentPage, perPageItems, itemName])


    useEffect(() => {
        axiosSecure.get(`/menu-counts?category=${itemName}`)
            .then(res => {
                console.log(res.data.result)
                setItemsCount(res.data.result)
            })
    }, [axiosSecure, itemName])

    const handlePre = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    console.log(foodItems)

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    loading ? (
                        counts.map((unUsed, index) => <Loader key={index} />)
                    ) : (
                        foodItems?.map(salad => <SaladCard key={salad._id} style={true} item={salad} />)
                    )
                }
            </div>

            <div className="mt-10">
                <ul className="flex space-x-5 justify-center font-inter">
                    <li
                        onClick={handlePre}
                        aria-disabled={currentPage === 0}
                        className={`${currentPage === 0 ? 'cursor-not-allowed' : 'cursor-pointer hover:border-blue-500'} flex items-center justify-center shrink-0 border  w-9 h-9 rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400" viewBox="0 0 55.753 55.753">
                            <path
                                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                data-original="#000000" />
                        </svg>
                    </li>

                    {
                        pages.map(page => (
                            <li
                                onClick={() => setCurrentPage(page)}
                                key={page}
                                className={`${currentPage === page ? 'bg-blue-500' : 'bg-white'} flex items-center justify-center shrink-0  border hover:border-blue-500 text-black border-blue-500 cursor-pointer text-base font-bold px-[13px] h-9 rounded-md`}>
                                {page}
                            </li>
                        ))
                    }

                    <li
                        onClick={handleNext}
                        aria-disabled={currentPage === pages.length - 1}
                        className={`${currentPage === pages.length - 1 ? 'cursor-not-allowed' : 'cursor-pointer hover:border-blue-500'} flex items-center justify-center shrink-0 border  w-9 h-9 rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
                            <path
                                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                data-original="#000000" />
                        </svg>
                    </li>
                </ul>
            </div>
        </>
    );
};

SaladPagination.propTypes = {
    itemName: PropTypes.string
};


export default SaladPagination;