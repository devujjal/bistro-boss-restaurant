import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import toast from "react-hot-toast";
import { Link } from "react-router";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosCommon();

    let totalPrice = cart?.data?.reduce((pre, curr) => {
        return pre + curr.price;
    }, 0);

    console.log(totalPrice)


    const handleDelete = async (id) => {
        console.log(id);

        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });

            if (result.isConfirmed) {

                const response = await axiosSecure.delete(`/carts/${id}`);

                if (response.data.deletedCount > 0) {
                    refetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your item has been deleted.",
                        icon: "success"
                    });
                }


            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
        }
    };



    return (
        <section className="bg-[#F6F6F6]">
            <div className="container mx-auto">
                <div className="px-6 py-3 md:px-24 md:py-28">
                    <SectionTitle heading={'WANNA ADD MORE?'} subHeading={'My Cart'} />

                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block bg-white min-w-full py-2 align-middle md:px-6 lg:px-8 lg:py-20">
                                <div className="flex justify-between items-center font-cinzel mb-6">
                                    <p className="text-base md:text-xl font-bold"><span>Total orders: {cart?.data?.length}</span></p>
                                    <p className="text-base md:text-xl font-bold"><span>total price: ${totalPrice}</span></p>
                                    {
                                        cart?.data?.length > 0 ? <>
                                            <Link to={'/dashboard/payment'}><button className="px-4 py-2 text-white rounded-xl bg-[#D1A054]">Pay</button></Link>
                                        </> : <>
                                            <button disabled className="px-4 py-2 text-white rounded-xl bg-gray-500">Pay</button>
                                        </>
                                    }
                                </div>
                                <div className="overflow-hidden md:rounded-lg">
                                    <table className="min-w-full font-inter">
                                        <thead className="bg-[#D1A054]">
                                            <tr>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"></th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">ITEM IMAGE</th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">ITEM NAME</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">PRICE</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">ACTION</th>


                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">

                                            {
                                                cart?.data?.map((item, index) => (
                                                    <tr key={item._id}>

                                                        <td className="px-4 py-4 text-sm text-[#737373] whitespace-nowrap">{index + 1}</td>

                                                        <td className="px-4 py-4 text-sm text-[#737373] whitespace-nowrap"><img src={item?.image} className="w-20 h-18" alt="" /></td>


                                                        <td className="px-4 py-4 text-sm text-[#737373] whitespace-nowrap">{item?.name}</td>
                                                        <td className="px-4 py-4 text-sm text-[#737373] whitespace-nowrap">{item?.price}</td>


                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div className="flex items-center gap-x-6">
                                                                <button
                                                                    onClick={() => handleDelete(item._id)}

                                                                    className="text-[#FFFFFF] transition-colors duration-200  
                                                                bg-[#B91C1C]
                                                                p-2 rounded-md
                                                                hover:text-red-300 focus:outline-none">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MyCart;