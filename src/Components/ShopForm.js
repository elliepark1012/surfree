import { useState } from "react";

const ShopForm = ( { onAddShop }) => {
    const [formData, setFormData] = useState({
        name:"",
        location:"",
        price:"",
        backgroundSrc:"",
        link:"",
        contact:"",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({...formData, [name]: value }));
    };

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
                <h3>Join Our Community</h3>

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
                    <option value="Rockaway Beach"></option>
                    <option value="Long Beach"></option>
                    <option value="Montauk"></option>
                    <option value="Sandy Hook"></option>
                </select>

                <label htmlFor="link">Shop Link</label>
                <input 
                    type="text"
                    id="link"
                    name="link"
                    onChange={handleChange}
                    value={formData.link}
                />

                <label htmlFor="backgroundSrc">Image</label>
                <input 
                    type="text"
                    id="backgroundSrc"
                    name="backgroundSrc"
                    onChange={handleChange}
                    value={formData.backgroundSrc}
                />

                <button type="sumbmit"> Join as a Shop</button>
            </form>
        </section>
    );
};

export default ShopForm;