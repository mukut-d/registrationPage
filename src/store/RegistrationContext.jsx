import { useState } from "react";
import { createContext } from "react";

export const Context = createContext({
  loggedIn: false,
  data: [],
  onSubmit: () => {},
  onLogin: () => {},
  onClose: () => {},
});

export default function RegistrationContext({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  function handleSubmit(dataObj) {
    setData();
    loggedIn(true);
  }

  function handleLogin({firstName, lastName, email, password}) {
   
    // check if user exists in data set
    setData(prev => {
        return [
            ...prev,
            {
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
            }
        ]
    })

    loggedIn(true);
  }

  function ifLogin(bool) {
    setLoggedIn(bool);
  }

  function handleClose() {
    setLoggedIn(!loggedIn);
  }

  const ctxValue = {
    loggedIn: loggedIn,
    data: data,
    onSubmit: handleSubmit,
    onLogin: handleLogin,
    onClose: handleClose,
  };
  return (
    <>
      <Context.Provider value={ctxValue}>{children}</Context.Provider>
    </>
  );
}
