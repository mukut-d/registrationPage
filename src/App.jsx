import { useContext } from "react";
import FormUI from "./components/form/FormUI";
import UsersTable from "./components/UsersTable";
import { Context } from "./store/RegistrationContext";

export default function App() {
  const { loggedIn } = useContext(Context);
  // let loggedIn = true;
  return (
    <>
      <div>
        {!loggedIn && <FormUI />}
        {loggedIn && (
          <>
            <UsersTable />
          </>
        )}
      </div>
    </>
  );
}
