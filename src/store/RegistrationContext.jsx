import { useState } from "react";
import { createContext } from "react";
import { DUMMY } from "../data/data";

export const Context = createContext({
  loggedIn: false,
  error: false,
  data: [],
  onSubmit: () => {},
  onLogin: () => {},
  onClose: () => {},
  resetError: () => {},
});

export default function RegistrationContext({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([
    {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      companyName: "",
    },
  ]);
  const [error, setError] = useState({});

  function handleLogin(loginObj) {
    console.log(loginObj);
    const updated = data.find((item) => {
      return item.email === loginObj.email;
    });

    if (updated) {
      if (updated.password !== loginObj.password) {
        setError({ err: "pwd", msg: "Enter valid password" });
      } else {
        ifLogin(true);
      }
    } else {
      setError({ err: "email", msg: "Enter Valid email" });
    }

    if (err.error === false) {
      ifLogin(true);
    }
  }

  function handleSubmit(data) {
    // check if user exists in data set
    setData((prev) => {
      return [...prev, { id: prev.length + 1, ...data }];
    });

    ifLogin(true);
  }

  function ifLogin(bool) {
    setLoggedIn(bool);
  }

  function handleClose() {
    setLoggedIn(!loggedIn);
  }

  function handleResetError() {
    setError({});
  }
  console.log(data);

  const ctxValue = {
    error: error,
    loggedIn: loggedIn,
    data: data,
    onSubmit: handleSubmit,
    onLogin: handleLogin,
    onClose: handleClose,
    resetError: handleResetError,
  };
  return (
    <>
      <Context.Provider value={ctxValue}>{children}</Context.Provider>
    </>
  );
}
