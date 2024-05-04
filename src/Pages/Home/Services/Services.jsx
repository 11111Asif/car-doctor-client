import { useEffect, useState } from "react";
import ServicesCart from "./ServicesCart";


const Services = () => {
    
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center space-y-5 mt-8">
                <h3 className="text-3xl text-orange-500 font-bold">Services</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised<br/> words which don't look even slightly believable. </p>

            </div>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
               {
                services.map(service => <ServicesCart key={service._id} service={service}></ServicesCart>)
               }
            </div>
        </div>
    );
};

export default Services;