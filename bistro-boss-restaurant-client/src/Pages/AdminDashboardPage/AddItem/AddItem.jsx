import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AddItem = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <section>
            <div className="container mx-auto">

                <div className=" relative m-10">
                    <SectionTitle heading={'ADD AN ITEM'} subHeading={"What's new?"} />

                    <div className="flex justify-center">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="p-6 space-y-6 w-full md:w-[60%] bg-[#F3F3F3] rounded-lg shadow">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="product-name" className="block mb-2 text-xl font-normal font-inter text-[#3e454c]">Recipe name*</label>
                                    <input type="text" {...register('item_name')} id="product-name" className="shadow-sm border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 font-raj" placeholder="Enter your item name" required="" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div className="">
                                        <label htmlFor="category" className="block mb-2 text-xl font-normal font-inter text-[#3e454c]">Category</label>
                                        <select id="category" {...register('category')} className="bg-white border border-gray-300 text-[#3e454c] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 ">
                                            <option >Choose a category</option>
                                            <option value="salad">Salad</option>
                                            <option value="pizza">Pizza</option>
                                            <option value="soups">Soups</option>
                                            <option value="desserts">Desserts</option>
                                            <option value="drinks">Drinks</option>
                                        </select>
                                    </div>

                                    <div className="">
                                        <label htmlFor="price" className="block mb-2 text-xl font-normal font-inter text-[#3e454c]">Price</label>
                                        <input type="number" {...register('price')} id="price" className="shadow-sm border border-gray-300 text-gray-900 sm:text-base font-raj rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required="" />
                                    </div>
                                </div>



                                <div className="">
                                    <label htmlFor="product-details" className="block mb-2 text-xl font-normal font-inter text-[#3e454c]">Product Details</label>
                                    <textarea id="product-details"{...register('details')} rows="6" className="border border-gray-300 text-gray-900 sm:text-base font-raj rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details"></textarea>
                                </div>


                            </div>

                            <div className="font-inter max-w-md">
                                <label className="text-base text-gray-500 font-semibold mb-2 block">Upload file</label>
                                <input type="file"
                                    className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" />
                                <p className="text-xs text-gray-400 mt-2">PNG and JPG are Allowed.</p>
                            </div>

                            <div>
                                <button className="text-white bg-gradient-to-r from-[#835D23] to-[#B58130] hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-md px-5 py-2.5 text-center font-inter" type="submit">Save all</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddItem;