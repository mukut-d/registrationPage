import { useContext } from "react";
import { DUMMY } from "../data/data";
import { Context } from "../store/RegistrationContext";

export default function UsersTable() {
  const { data, onClose } = useContext(Context);
  return (
    <>
      <tabel>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </tabel>
      <div>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}
