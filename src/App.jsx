import { useContext, useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UsersTable from "./components/UsersTable";
import { Context } from "./store/RegistrationContext";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const { loggedIn } = useContext(Context);

  function handleClick(mode) {
    if (mode === "login") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }
  return (
    <>
      <div>
        {!loggedIn && (
          <div>
            {isLogin && (
              <>
                <Login />
                <div>
                  <p>Don't have an account</p>
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
          </div>
        )}
        {true && (
          <>
            <UsersTable />
          </>
        )}
      </div>
    </>
  );
}
