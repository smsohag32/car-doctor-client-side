import { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        const loggedUserEmail = {
          email: user.email,
        };

        fetch(`http://localhost:5000/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUserEmail),
        })
          .then((res) => res.json())
          .then((data) => {
            // locatl storage is not best
            localStorage.setItem("car-access-token", data.token);
            console.log(data);
            navigate(from, { replace: true });
          });
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
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-center text-2xl mb-3 font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p>
              <small>Do not have and account </small>
              <span>
                <Link className="link link-secondary" to="/register">
                  Sing up
                </Link>
              </span>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
