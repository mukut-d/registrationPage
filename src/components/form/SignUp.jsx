import { useContext } from "react";
import { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaUserSecret } from "react-icons/fa";
import { Context } from "../../store/RegistrationContext";
import { hasMinLength, isEmail, isNotEmpty } from "../../util/validation";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";

export default function SignUp() {
  const { onSubmit } = useContext(Context);
  const [signup, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: null,
    password: "",
  });

  function handleChange(id, value) {
    setSignUp((prev) => {
      return { ...prev, [id]: value };
    });
  }

  console.log(signup);
  function handleSubmit(event) {
    if (!isNotEmpty(signup.firstName)) {
      alert("ENTER VALID FIRST NAME!");
      return;
    }
    if (!isNotEmpty(signup.lastName)) {
      alert("ENTER VALID LAST NAME!");
      return;
    }
    if (!isEmail(signup.email)) {
      alert("ENTER VALID EMAIL!");
      return;
    }
    if (!isNotEmpty(signup.password) || hasMinLength(signup.password, 6)) {
      alert("ENTER PROPER PASSWORD!");
      return;
    }

    event.preventDefault();
    // first validate data here...

    onSubmit(signup);
  }
  return (
    <>
      <div className="blue">
        <Form
          onSubmit={() => {
            handleSubmit(event);
          }}
        >
          <section className="signup">
            <h1>Sign Up !</h1>

            <Input
              icon={
                <FaUser
                  className="text-xl text-textColor "
                  style={{ paddingRight: "8px" }}
                />
              }
              placeholder="First Name"
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
            />
            <Input
              icon={
                <FaUserSecret
                  className="text-xl text-textColor bg-white"
                  style={{ paddingRight: "8px" }}
                />
              }
              placeholder="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
            />
            <Input
              icon={
                <FaEnvelope
                  className="text-xl text-textColor "
                  style={{ paddingRight: "8px" }}
                />
              }
              placeholder="Email Here"
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
            />
            <Input
              icon={
                <FaLock
                  className="text-xl text-textColor"
                  style={{ paddingRight: "8px" }}
                />
              }
              placeholder="Password Here"
              type="password"
              id="password"
              name="password"
              minLength={6}
              required
              onChange={handleChange}
            />
            <div id="signUp-actions">
              <Button onClick={handleSubmit} className="button">
                Signup
              </Button>
              <Button type="reset" className="button">
                Reset
              </Button>
            </div>
            <div className="curve"></div>
          </section>
        </Form>
      </div>
    </>
  );
}
