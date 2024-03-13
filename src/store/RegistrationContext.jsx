import { useState } from "react";
import { createContext } from "react";

export const Context = createContext({
  loggedIn: false,
  error: false,
  data: [],
  onSubmit: () => {},
  onLogin: () => {},
  onClose: () => {},
});

export default function RegistrationContext({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  function handleLogin(loginObj) {
    const updated = data.find((item) => {
      return item.email === loginObj.email;
    });
    if (updated) {
      if (updated.password !== loginObj.password) {
        setError({ err: "pwd", error: true });
      } else {
        loggedIn(true);
      }
    } else {
      setError({ err: "email", error: true });
    }

    if (err.error === false) {
      ifLogin(true);
    }
  }

  function handleSubmit(data) {
    // check if user exists in data set
    setData((prev) => {
      return [...prev, { ...data }];
    });

    ifLogin(true);
  }

  console.log(data);

  function ifLogin(bool) {
    setLoggedIn(bool);
  }

  function handleClose() {
    setLoggedIn(!loggedIn);
  }

  const ctxValue = {
    error: error,
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
