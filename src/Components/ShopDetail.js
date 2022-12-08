import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShopDetail = () => {
    const [shop, setShop] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/shops/${id}`)
         .then((r) => r.json())
         .then((shop) => {
            setShop(shop);
            setIsLoaded(true);
         });
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>
    
    const { name, location, price, backgroundSrc, link, contact, rating } = shop;

    return (
        <section>
            <div className="shop-detail-box">
                <div>
                    <img className="shop-image" src={backgroundSrc} alt={name} />                 
                </div>
                    <h1 className="card-name">{name}</h1>
                    <h1 className="card-location">📍 {location}</h1>
                <div className="details">
                    <h1>Surf Board Rental ${price}/h </h1>
                    <h1>Average Review {rating}</h1>
                    {link ? (
                        <p> 
                            <a className="shop-link" target="_blank" rel="noreferrer" href={link}>
                                Click Here for Shop Link 👈
                            </a>
                        </p>
                    ) : null}
                    <span className="contact">Contact {contact}</span>
                </div>
                </div>            
        </section>
    );
};

export default ShopDetail;
