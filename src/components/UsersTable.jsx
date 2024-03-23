import { useContext } from "react";
import { DUMMY } from "../data/data";
import { Context } from "../store/RegistrationContext";

export default function UsersTable() {
  const { data, onClose } = useContext(Context);
  return (
    <>
      <section className="">
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>

            <th>Email</th>
            <th>Password</th>
          </tr>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>

                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button onClick={onClose}>Close</button>
        </div>
      </section>
      <div className="bubble"></div>
    </>
  );
}
