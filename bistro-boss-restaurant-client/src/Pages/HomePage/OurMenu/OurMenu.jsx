import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import BistroMenu from "../Shared/BistroMenu/BistroMenu";

const OurMenu = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(menu => menu.category === "popular");
                setMenus(popularMenu)
            })
    }, [])

    return (
        <section className="pb-10">
            <div className="container mx-auto">
                <div className="px-6 py-3 md:px-24">
                    <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        {
                            menus.map(menuItem => <BistroMenu key={menuItem._id} item={menuItem} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMenu;