import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const { user, userLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  const url = `https://car-doctors-server-rho.vercel.app/bookings?email=${user?.email}`;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        fetch(`https://car-doctors-server-rho.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Service has been deleted.",
                "success"
              );
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };
  const handleConfirm = (id) => {
    fetch(`https://car-doctors-server-rho.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          userLogout();
          navigate("/login");
        }
        setBookings(data);
      });
  }, [url, navigate, userLogout]);
  return (
    <div>
      <h3 className="text-center mb-6 font-bold text-3xl">
        Your Bookings: {bookings?.length}
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>img</th>
              <th>Service</th>
              <th>email</th>
              <th>date</th>
              <th>price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                handleConfirm={handleConfirm}
                handleDelete={handleDelete}
                key={booking._id}
                booking={booking}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
