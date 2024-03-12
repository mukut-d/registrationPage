import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../store/RegistrationContext";
import Input from "../Input";

export default function Login() {
  const { onLogin, error } = useContext(Context);
  const [loginObj, setLoginObj] = useState({});
  let errEmail = false;
  let errPwd = false;

  function handleChange(id, value) {
    setLoginObj((prev) => {
      return { ...prev, [id]: value };
    });
  }
  console.log(loginObj);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");



    event.target.reset();
    onLogin(loginObj);
  }
  if (error.email) {
    if (error.error) errEmail = true;
  } else if (error.password) {
    if (error.error) {
      errPwd = true;
    }
  }

  return (
    <>
      <form
        onSubmit={() => {
          handleSubmit(event);
        }}
      >
        <section className="dark">
          <h1>Login !</h1>
          <div id="inputCard">
            <p>
              <Input
                label="Email"
                id="email"
                type="email"
                name="email"
                error={errEmail}
                onChange={handleChange}
              />
            </p>
            <p>
              <Input
                error={errPwd}
                label="Password"
                id="password"
                type="password"
                name="password"
                minLength={6}
                required
                onChange={handleChange}
              />
            </p>

            <p id="form-actions">
              <button>Login</button>
              <button type="reset">Reset</button>
            </p>
          </div>
        </section>
        <section className="red">
          <div class="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
      </form>
    </>
  );
}
