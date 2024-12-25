import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SaladCard from "../../../Components/SaladCard/SaladCard";

const Recommends = () => {

    const [salads, setSalads] = useState([]);

    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                const salad = data.filter(saladItem => saladItem.category === "soup");
                setSalads(salad)
            })
    }, [])



    return (
        <section className="mb-10">
            <div className="container mx-auto">
                <div className="px-6 py-3 md:px-24">
                    <SectionTitle heading={'CHEF RECOMMENDS'} subHeading={'Should Try'} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {
                            salads.slice(0, 3).map((salad) => <SaladCard key={salad._id} item={salad} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommends;