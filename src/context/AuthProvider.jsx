import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // user sing up
  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user log in
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };
  // google login

  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // observer

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);

      if (loggedUser.email) {
        const loggedUserEmail = {
          email: loggedUser.email,
        };
        fetch(`https://car-doctors-server-rho.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUserEmail),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            //local storage is not best
            console.log(data);
            localStorage.setItem("car-access-token", data.token);
          });
      } else {
        localStorage.removeItem("car-access-token");
      }
    });
    return () => unsub();
  }, []);

  const userInfo = {
    user,
    loading,
    createAccount,
    userLogout,
    userLogin,
    googleSingIn,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
