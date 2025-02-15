import { useEffect, useState } from "react";

const useMenuDatas = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://bistro-boss-restaurant-server-gules.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                setDatas(data)
                setLoading(false)
            })
    }, [])

    return { datas, loading }
};

export default useMenuDatas;