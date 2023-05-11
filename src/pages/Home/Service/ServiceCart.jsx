import img1 from "../../../assets/images/services/1.jpg";
import img2 from "../../../assets/images/services/2.jpg";
import img3 from "../../../assets/images/services/3.jpg";
import img4 from "../../../assets/images/services/4.jpg";
import img5 from "../../../assets/images/services/5.jpg";
import img6 from "../../../assets/images/services/6.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
const ServiceCart = () => {
  return (
    <>
      <div className="card w-full bg-base-100 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Electrical System</h2>
          <div className="card-actions justify-between items-center">
            <p className="text-primary font-bold">Price: $20.00</p>
            <button className="btn btn-secondary btn-outline">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Electrical System</h2>
          <div className="card-actions justify-between items-center">
            <p className="text-primary font-bold">Price: $20.00</p>
            <button className="btn btn-secondary btn-outline">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Electrical System</h2>
          <div className="card-actions justify-between items-center">
            <p className="text-primary font-bold">Price: $20.00</p>
            <button className="btn btn-secondary btn-outline">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img4} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Electrical System</h2>
          <div className="card-actions justify-between items-center">
            <p className="text-primary font-bold">Price: $20.00</p>
            <button className="btn btn-secondary btn-outline">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img5} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Electrical System</h2>
          <div className="card-actions justify-between items-center">
            <p className="text-primary font-bold">Price: $20.00</p>
            <button className="btn btn-secondary btn-outline">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img6} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Electrical System</h2>
          <div className="card-actions justify-between items-center">
            <p className="text-primary font-bold">Price: $20.00</p>
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
