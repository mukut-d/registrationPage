import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../store/RegistrationContext";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function SignUp() {
  const { onSubmit } = useContext(Context);
  const [signup, setSignUp] = useState({});

  function handleChange(id, value) {
    setSignUp((prev) => {
      return { ...prev, [id]: value };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    // first validate data here...

    onSubmit(signup);
  }
  return (
    <>
      <div className="blue">
        <form
          onSubmit={() => {
            handleSubmit(event);
          }}
        >
          <section className="signup">
            <h1>Sign Up !</h1>

            <Input
              label="First Name"
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
            />
            <Input
              label="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
            />
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              minLength={6}
              required
              onChange={handleChange}
            />
            <div>
              <Button onClick={handleSubmit} className="button">
                Signup
              </Button>
              <Button type="reset" className="button">
                Reset
              </Button>
            </div>
            <div className="curve"></div>
          </section>
        </form>
      </div>
    </>
  );
}
