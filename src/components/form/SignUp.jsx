import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../store/RegistrationContext";
import Input from "../Input";

export default function SignUp() {
  const [data, setData] = useState({});
  const { onSubmit } = useContext(Context);
  const [signup, setSignUp] = useState({});

  function handleChange(id, value) {
    setSignUp((prev) => {
      return { ...prev, [id]: value };
    });
  }
  console.log(signup);
  function handleSubmit(event) {
    event.preventDefault();
    // first validate data here...

    setData((prev) => {
      return {
        ...prev,
        [identifier]: identifier,
      };
    });
    onSubmit(data);
  }
  return (
    <>
      <form
        onSubmit={() => {
          handleSubmit(event);
        }}
      >
        <section className="blue">
          <h1>Sign Up !</h1>
          <Input
            label={"First Name"}
            type={"text"}
            id={"firstName"}
            onChange={handleChange}
          />
          <Input
            label={"Last Name"}
            type={"text"}
            id={"lastName"}
            onChange={handleChange}
            name={"lastName"}
          />
          <Input
            label={"Email"}
            type={"email"}
            id={"email"}
            name={"email"}
            required
            onChange={handleChange}
          />
          <Input
            label={"Password"}
            type={"password"}
            id={"password"}
            name={"password"}
            minLength={6}
            required
            onChange={handleChange}
          />
          <div>
            <button>Signup</button>
            <button type="reset">Reset</button>
          </div>
          <div className="curve"></div>
        </section>
      </form>
    </>
  );
}
