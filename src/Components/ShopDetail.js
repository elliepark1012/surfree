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
            <div className="shop-detail box">
                <div className="shop-image">
                    <img src={backgroundSrc} alt={name} />                 
                </div>
                <div className="details">
                    <h2>{name}</h2>
                    <p>{location}</p>
                    <p>{price}</p>
                    {link ? (
                        <p>
                            <a target="_blank" rel="noreferrer" href={link}>
                                Shop Link
                            </a>
                        </p>
                    ) : null}
                <span className="contact">{contact}</span>
                <div> Reviews {rating} </div>
                </div>            
            </div>
        </section>
    );
};

export default ShopDetail;
