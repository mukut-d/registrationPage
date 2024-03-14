import { useState } from "react";
import Button from "../ui/Button";
import Login from "./Login";
import SignUp from "./SignUp";

export default function FormUI() {
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
          <div id="login">
            <p>Login your account or Create One...</p>
            <Button
              onClick={() => {
                handleClick();
              }}
              className=" text-button button"
            >
              Signup
            </Button>
          </div>
        </>
      )}
      {!isLogin && (
        <>
          <SignUp />
          <div id="acc">
            <p>Already have an account...</p>
            <Button
              onClick={() => handleClick("login")}
              className=" text-button button"
            >
              Login
            </Button>
          </div>
        </>
      )}
    </>
  );
}
