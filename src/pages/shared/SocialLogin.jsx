import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const SocialLogin = () => {
  const { googleSingIn } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    console.log("hello");
    googleSingIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">OR</div>
      </div>
      <div onClick={handleGoogleLogin} className="text-center">
        <button className="btn btn-circle btn-outline">G</button>
      </div>
    </div>
  );
};

export default SocialLogin;
