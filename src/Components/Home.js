import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/mainvideo.mp4";

const Home = () => {
    const [newShops, setNewShops] = useState([]);

    useEffect(() => {
        //fetch the 3 most recently added shops from json-server
        fetch("http://localhost:3000/shops?_sort=id&_order=desc&_limit=3")
         .then((r) => r.json)
         .then((newShops) => {
            setNewShops(newShops)
         });
    },[]);

    return (
        <section className="box">
            <h2>Travel free Build Community</h2>
            <h3>New Shops</h3>
            {newShops.map((shop) => (
                <p key={shop.id}>{shop.name}</p>
            ))}
            <div style={{margin: "1rem 0"}}>
                <Link to="/shops" className="button">
                    View All Shops
                </Link>
            </div>
            <video src= {video} autoPlay loop muted /> 

        </section>
    )
};

export default Home;