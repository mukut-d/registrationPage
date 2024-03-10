import { useContext } from "react";
import { Context } from "../store/RegistrationContext";

export default function UsersTable() {
  const { data } = useContext(Context);
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
          <tr>
            <td>Mukut</td>
            <td>Das</td>
            <td>mukut@gmail</td>
            <td>Mukut123</td>
          </tr>
        </tbody>
      </tabel>
    </>
  );
}
