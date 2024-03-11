import { useContext } from "react";
import { useRef } from "react";
import { Context } from "../../store/RegistrationContext";
import Input from "../Input";

export default function Login() {
  const { onLogin } = useContext(Context);
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event, emailRef, passwordRef) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("submitted");

    console.log("email-", email);
    console.log("password-", password);
    onLogin(email, password);
    handleReset(emailRef, passwordRef);
    event.target.reset();
  }

  return (
    <>
      <form
        onSubmit={() => {
          handleSubmit(event, emailRef, passwordRef);
        }}
      >
        <section className="dark">
          <h1>Login !</h1>
          <div id="inputCard">
            <p>
              <Input label="Email" id="email" type="email" name="email" />
            </p>
            <p>
              <Input
                label="Password"
                id="password"
                type="password"
                name="password"
                minLength={6}
                required
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
