import { useContext, useState } from "react";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createAccount, userLogout } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!(name && email && password)) {
      return setError("something went wrong");
    }
    createAccount(email, password)
      .then((result) => {
        const loggedUser = result.user;

        navigate("/login");
        userLogout();
        e.target.reset();
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-10 flex-col lg:flex-row">
        <div className="w-full text-center">
          <img src={img} alt="img" />
        </div>
        <div className="card w-full border-2 p-10 shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-center text-2xl mb-3 font-bold">Sing Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
                name="confirm"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Sing Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
