import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
const ServiceCart = ({ service }) => {
  const { _id, title, img, price } = service;
  const handleDownload = () => {
    saveAs(img, "service img");
  };
  return (
    <>
      <div className="card w-full bg-base-100 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            onClick={handleDownload}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between items-center">
            <p className="text-primary font-bold">Price: {price}</p>
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-secondary btn-outline">
                <AiOutlineArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCart;
