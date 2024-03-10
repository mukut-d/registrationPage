import { useContext } from "react";
import { useState } from "react";
import { Context } from "../store/RegistrationContext";

export default function SignUp() {
  const [data, setData] = useState({});
  const {onSubmit} = useContext(Context);
  function handleSubmit(event, identifier) {
    event.preventDefault();
    // first validate data here...
    
    // obj banake onSubmit me pass kar dena
    setData(prev => {
      return {
        ...prev,
        [identifier]: identifier,
      }
    })
    onSubmit(data);
  }
  return (
    <>
      <form
        onSubmit={() => {
          handleSubmit(event);
        }}
      >
        <h2>Sign Up</h2>
        <div>
          <label>First Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" required />
        </div>
        <div>
          <button>Signup</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </>
  );
}
