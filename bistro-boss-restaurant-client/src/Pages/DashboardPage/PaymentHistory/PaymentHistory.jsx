import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: historys = [] } = useQuery({
        queryKey: ['payments-history', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })


    return (
        <section>
            <div className="container mx-auto">
                <div className="px-6 py-3 md:px-24 md:py-28">
                    <SectionTitle heading={'PAYMENT HISTORY'} subHeading={'At a Glance!'} />
                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block bg-white min-w-full py-2 align-middle md:px-6 lg:px-8 lg:py-20">
                               
                                <div className="overflow-hidden md:rounded-lg">
                                    <table className="min-w-full font-inter">
                                        <thead className="bg-[#D1A054]">
                                            <tr>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"></th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">User Email</th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">TRANSACTION ID</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">PRICE</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">STATUS</th>


                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">

                                            {
                                                historys?.map((history, index) => (
                                                    <tr key={history._id}>

                                                        <td className="px-4 py-4 text-sm text-[#737373] whitespace-nowrap">{index + 1}</td>

                                                        <td className="px-4 py-4 text-sm text-[#737373] whitespace-nowrap">{history?.email}</td>


                                                        <td className="px-4 py-4 text-sm text-[#737373] whitespace-nowrap">{history?.transactionId}</td>

                                                        <td className="px-4 py-4 text-sm text-[#737373] whitespace-nowrap">{history?.price}</td>

                                                        <td className="px-4 py-4 text-sm text-[#737373] whitespace-nowrap">{history?.status}</td>
                                                        

                                                    
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

export default PaymentHistory;