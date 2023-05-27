import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { currentUser, signinWithGoogle } = UserAuth();
  console.log(currentUser);

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chat");
    }
  },[currentUser]);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://source.unsplash.com/s_gvJQpPp38")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-warning">Hello there 👋👋</h1>
            <p className="mb-5 text-warning font-bold">
              Join the conversation and enjoy your life!! Remember it is an open chat. Be careful of what you share :)
            </p>
            <button onClick={handleLogin}   className="btn btn-warning font-bold">Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
