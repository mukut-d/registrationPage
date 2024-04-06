const data = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  companyName: "",
};
const formFields = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Email Here",
    icon: (
      <FaEnvelope
        className="text-xl text-textColor"
        style={{ paddingRight: "8px" }}
      />
    ),
    required: true,
    value: data["email"],
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Password Here",
    icon: (
      <FaLock
        className="text-xl text-textColor"
        style={{ paddingRight: "8px" }}
      />
    ),
    required: true,
    value: data["password"],
  },
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "First Name Here",
    icon: (
      <FaUser
        className="text-xl text-textColor"
        style={{ paddingRight: "8px" }}
      />
    ),
    required: true,
    value: data["firstName"],
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "Last Name Here",
    icon: (
      <FaUser
        className="text-xl text-textColor"
        style={{ paddingRight: "8px" }}
      />
    ),
    required: true,
    value: data["lastName"],
  },
  {
    name: "companyName",
    type: "text",
    label: "Business Name",
    placeholder: "Business Name",
    icon: (
      <FaBuilding
        className="text-xl text-textColor"
        style={{ paddingRight: "8px" }}
      />
    ),
    required: true,
    value: data["companyName"],
  },
];

import { useState } from "react";
import { FaBuilding, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Button from "./Button";
import DynamicForm from "./DynamicForm";

{
  /* <DynamicForm ref={formRef} fields={formFields} onChange={handleFormDataChange}>
  <div className="flex w-full">
    <Button handleSubmit={handleSubmit} value="Submit" />
  </div>
</DynamicForm>; */
}

const Form = () => {
  const [input, setInput] = useState('');
  const handleSubmit = () => {};
  const handleFormDataChange = (value) => {
    console.log("input value-", value);
    setInput()
  };
  return (
    <>
      <section className="">
        <DynamicForm
          title={"Sign Up!"}
          fields={formFields}
          onChange={handleFormDataChange}
        >
          <div id="buttonContainer">
            <Button onClick={handleSubmit} className="button">
              Submit
            </Button>
          </div>
        </DynamicForm>
      </section>
    </>
  );
};

export default Form;
