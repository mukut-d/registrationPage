import { useContext } from "react";
import Form from "./components/form/Form";
import Header from "./components/Header";
import UsersTable from "./components/UsersTable";
import { Context } from "./store/RegistrationContext";

export default function App() {
  const { loggedIn } = useContext(Context);
  // let loggedIn = true;
  return (
    <>
      <div>
        {!loggedIn && <Form />}
        {loggedIn && (
          <>
            <UsersTable />
          </>
        )}
      </div>
    </>
  );
}
