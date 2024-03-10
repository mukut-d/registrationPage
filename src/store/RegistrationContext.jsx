import { useState } from "react";
import { createContext } from "react";

export const Context = createContext({
  loggedIn: false,
  data: [],
  onSubmit: ()=>{},
  onLogin:()=>{},
});

export default function RegistrationContext({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  function handleSubmit(dataObj) {
    setData();
    loggedIn(true);
  }

  function handleLogin(dataObj) {
    // check if user exists in data set

    loggedIn(true);
  }

  function ifLogin(bool) {
    setLoggedIn(bool);
  }

  const ctxValue = {
    loggedIn: loggedIn,
    data: data,
    onSubmit: handleSubmit,
    onLogin: handleLogin,
  };
  return (
    <>
      <Context.Provider value={ctxValue}>{children}</Context.Provider>
    </>
  );
}
