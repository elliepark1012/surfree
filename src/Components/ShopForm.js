import { useState } from "react";
import comingsoon from "../assets/coming_soon.jpg"

const ShopForm = ( { onAddShop }) => {
    const [formData, setFormData] = useState({
        name:"",
        location:"",
        price:"",
        backgroundSrc:comingsoon,
        link:"",
        contact:"",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({...formData, [name]: value,}));
    };

    const handleClick = () => {
        const welcome = "Thank you for becoming our partner"
        alert(welcome)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({...formData}),
        };

        fetch("http://localhost:3000/shops", configObj)
         .then((resp) => resp.json())
         .then((shop) => {
            onAddShop(shop);
            setFormData({
                name:"",
                location:"",
                price:"",
                backgroundSrc:"",
                link:"",
                contact:"",
            });
         });
    };

    return (
        <section>
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                <h1 className="form-title">Join Our Community<br></br>- Surfree Partnership -</h1>

                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />

                <label htmlFor="location">Location</label>
                <select
                    id="location"
                    name="location"
                    onChange={handleChange}
                    value={formData.location}
                >
                    <option value="Location">Location</option>
                    <option value="Rockaway Beach">Rockaway Beach</option>
                    <option value="Long Beach">Long Beach</option>
                    <option value="Montauk">Montauk</option>
                    <option value="Sandy Hook">Sandy Hook</option>
                </select>

                <label htmlFor="link">Shop Link</label>
                <input 
                    type="text"
                    id="link"
                    name="link"
                    onChange={handleChange}
                    value={formData.link}
                />

                <label htmlFor="price">Surf Board Rental Price (per hour)</label>
                <input 
                    type="number"
                    id="price"
                    name="price"
                    onChange={handleChange}
                    value={formData.price}
                />

                <h3>Our Connection Team will contact you shortly. 
                <br></br>Your shop will show up on the page with Coming Soon image!</h3>    

                <button type="sumbmit" onClick={handleClick}> Become a Partner</button>
            </form>
        </section>
    );
};

export default ShopForm;