import { useContext } from "react";
import FormUI from "./components/form/FormUI";
import UsersTable from "./components/UsersTable";
import { Context } from "./store/RegistrationContext";
import { FaUser } from "react-icons/fa";
import Form from "./components/ui/Form";

export default function App() {
  const { loggedIn } = useContext(Context);

  // let loggedIn = true;
  return (
    <>
      <div>
        {!loggedIn && (
          <>
            {/* <FormUI /> */}
            <Form />
          </>
        )}
        {loggedIn && (
          <>
            <UsersTable />
          </>
        )}
      </div>
    </>
  );
}
