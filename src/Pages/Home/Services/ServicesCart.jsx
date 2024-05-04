
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const ServicesCart = ({service}) => {
    const {_id,title, price, img} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="flex justify-between">
          <p className="text-orange-600">Price: ${price}</p>
            <AiOutlineArrowRight className="text-orange-500 text-2xl"></AiOutlineArrowRight>
          </div>
              <Link to = {`/checkout/${_id}`}>
              <button className="btn btn-primary">Book Now</button>
              </Link>
        </div>
      </div>
    );
};

export default ServicesCart;