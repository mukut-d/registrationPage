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
  const [error, setError] = useState(false);

  function handleLogin(email,password) {
    const updated = data.find(item => {return item.email === email});
    if(updated){
      if(updated.password !== password){
        setError(true);
      }
      else {
        loggedIn(true);
      }
    }
    else{
      setError(true);
    }
  }

  function handleSubmit(firstName, lastName, email, password) {
   
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
