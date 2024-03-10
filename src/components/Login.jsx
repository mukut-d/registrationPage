import { useRef } from "react";
import Input from "./Input";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event, emailRef, passwordRef) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("submitted");

    console.log("email-", email);
    console.log("password-", password);
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
        <h2>Login</h2>
        <div id="inputCard">
          <Input
            label="Email"
            id="email"
            type="email"
            name="email"     
          />
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            minLength={6}
            required
          />

          <p id="form-actions">
            <button>Login</button>
            <button type="reset">Reset</button>
          </p>
        </div>
      </form>
    </>
  );
}
