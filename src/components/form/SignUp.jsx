import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../store/RegistrationContext";
import Input from "../Input";

export default function SignUp() {
  const [data, setData] = useState({});
  const { onSubmit } = useContext(Context);
  function handleSubmit(event, identifier) {
    event.preventDefault();
    // first validate data here...

    // obj banake onSubmit me pass kar dena
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
          <Input label={"First Name"} type={"text"} id={"firstName"} />
          <Input label={"Last Name"} type={"text"} id={"lastName"} />
          <Input label={"Email"} type={"email"} id={"email"} required/>
          <Input label={"Password"} type={"password"} id={"password"} required/>
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
