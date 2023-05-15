import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, _id, img, price } = service;

  //   handle book service
  const handleBookService = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const order = {
      customerName: name,
      email,
      service: title,
      date,
      service_id: _id,
      service_title: title,
      price: price,
      img,
    };

    fetch(`https://car-doctors-server-rho.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="card-body">
        <h2 className="text-center text-3xl">Book Service : {title}</h2>
        <form onSubmit={handleBookService}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                defaultValue={user?.email}
                readOnly
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder=""
                name="price"
                defaultValue={price}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="mt-7 form-control">
            <input
              type="submit"
              value="CheckOut"
              className="btn btn-block btn-secondary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
