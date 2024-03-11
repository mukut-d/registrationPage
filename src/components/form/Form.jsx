import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Form() {
  const [isLogin, setIsLogin] = useState(false);

  function handleClick(mode) {
    if (mode === "login") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }
  return (
    <>
      {isLogin && (
        <>
          <Login />
          <div>
            <p>Login your account or Create One...</p>
            <button
              onClick={() => {
                handleClick();
              }}
            >
              Signup
            </button>
          </div>
        </>
      )}
      {!isLogin && (
        <>
          <SignUp />
          <div>
            <p>Already have an account...</p>
            <button onClick={() => handleClick("login")}>Login</button>
          </div>
        </>
      )}
    </>
  );
}
