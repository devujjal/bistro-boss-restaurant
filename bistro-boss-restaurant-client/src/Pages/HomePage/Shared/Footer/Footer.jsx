import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-1 md:grid-cols-2 text-white">
                <div className="bg-[#1F2937] flex justify-center md:justify-end items-center md:pr-32">
                    <div className=" text-center py-14 font-inter">
                        <h4 className="text-xl">CONTACT US</h4>
                        <ul className="mt-3 space-y-1">
                            <li className="text-sm">123 ABS Street, Uni 21, Bangladesh</li>
                            <li className="text-sm">+88 123456789</li>
                            <li className="text-sm">Mon - Fri: 08:00 - 22:00</li>
                            <li className="text-sm">Sat - Sun: 10:00 - 23:00</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#111827] flex justify-start items-center md:pl-32">
                    <div className="text-center py-14 font-inter">
                        <h4 className="text-xl">Follow US</h4>
                        <p className="mt-3 text-sm"><span >Join us on social media</span></p>
                        <div className="flex justify-center items-center mt-3 gap-3">
                            <Link><FaFacebookF size={25} /></Link>
                            <Link><FaInstagram size={25} /></Link>
                            <Link><FaTwitter size={25} /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#151515] text-white py-3">
                <p className="text-center font-inter font-[17px]">Copyright &copy; 2024. All rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;