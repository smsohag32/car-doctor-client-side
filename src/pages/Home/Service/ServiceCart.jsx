import { AiOutlineArrowRight } from "react-icons/ai";
const ServiceCart = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <>
      <div className="card w-full bg-base-100 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between items-center">
            <p className="text-primary font-bold">Price: {price}</p>
            <button className="btn btn-secondary btn-outline">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCart;
