import Button from "./Button";
import Input from "./Input";

const DynamicForm = ({ title, onChange, fields, children }) => {
  return (
    <>
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div id="inputCard">
          {fields.map((item) => (
            <Input
              icon={item.icon}
              placeholder={item.placeholder}
              type={item.type}
              value={item.value}
              onChange={onChange}
            />
          ))}
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default DynamicForm;
