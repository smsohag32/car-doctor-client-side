import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctors-server-rho.vercel.app/services/")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="py-10">
      <div className="space-y-3 text-center">
        <h2 className="text-primary font-bold">Service</h2>
        <h1 className="text-3xl font-bold">Service</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 my-10 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {services?.map((service) => (
          <ServiceCart key={service._id} service={service} />
        ))}
      </div>
      <p className="text-center">
        <button className="btn text-center mx-auto btn-secondary btn-outline">
          More Services
        </button>
      </p>
    </div>
  );
};

export default Services;
