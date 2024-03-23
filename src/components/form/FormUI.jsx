import { useContext } from "react";
import { Context } from "../../store/RegistrationContext";
import Input from "../ui/Input";

import { FaEnvelope, FaLock, FaUser, FaUserSecret } from "react-icons/fa";

import Button from "../ui/Button";
import { useState } from "react";

export default function FormUI() {
  const { onLogin, error, onSubmit } = useContext(Context);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  function handleSubmit() {
    if (email === "" || !email.includes("@")) {
      alert("Enter Valid Email");
      return;
    } else if (password === "") {
      alert("Password Is invalid");
      return;
    }

    if (isLogin) {
      onLogin({ email, password });
    } else {
      if (name === "") {
        alert("Enter Proper name");
        return;
      }
      if (confirmPassword !== password) {
        alert("Password doesn't match");
        return;
      }
      onSubmit({ email, password, name, confirmPassword });
    }
    reset();
  }
  console.log(email);
  console.log(password);
  console.log(name);
  console.log(confirmPassword);

  function reset() {
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
  }

  function handleClick(mode) {
    //  console.log("clicked");

    setIsLogin(!isLogin);
  }
  console.log(isLogin);

  return (
    <>
      <div>
        <section className="dark">
          <h1>{!isLogin ? "SignUp !" : "Login !"}</h1>
          <div>
            <div id="inputCard">
              <Input
                icon={
                  <FaEnvelope
                    className="text-xl text-textColor "
                    style={{ paddingRight: "8px" }}
                  />
                }
                idClass="loginEmail"
                placeholder="Email Here"
                id="email"
                type="email"
                name="email"
                error={error.err === "email" ? error : {}}
                value={email}
                onChange={setEmail}
              />

              <Input
                error={error.err === "password" ? error : {}}
                icon={
                  <FaLock
                    className="text-xl text-textColor"
                    style={{ paddingRight: "8px" }}
                  />
                }
                placeholder="Password Here"
                value={password}
                id="password"
                type="password"
                name="password"
                minLength={6}
                required
                onChange={setPassword}
              />
              {!isLogin && (
                <>
                  <Input
                    icon={
                      <FaUser
                        className="text-xl text-textColor "
                        style={{ paddingRight: "8px" }}
                      />
                    }
                    idClass="loginEmail"
                    placeholder="Name Here"
                    id="name"
                    type="name"
                    name="name"
                    value={name}
                    onChange={setName}
                  />

                  <Input
                    icon={
                      <FaUserSecret
                        className="text-xl text-textColor"
                        style={{ paddingRight: "8px" }}
                      />
                    }
                    placeholder="Confirm Password "
                    value={confirmPassword}
                    id="password"
                    type="password"
                    name="confirmPassword"
                    minLength={6}
                    required
                    onChange={setConfirmPassword}
                  />
                </>
              )}
              <div id="signUp-actions">
                <Button className="button" type="submit" onClick={handleSubmit}>
                  {!isLogin ? "SignUp" : "Login"}
                </Button>
                <Button
                  className="button"
                  type="reset"
                  onClick={() => {
                    reset();
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
          <div id="login">
            <p>
              {!isLogin && (
                <>
                  <Button
                    onClick={() => {
                      handleClick();
                    }}
                    className=" text-button button"
                  >
                    Login
                  </Button>{" "}
                </>
              )}
              {isLogin && (
                <>
                  <Button
                    onClick={() => {
                      handleClick();
                    }}
                    className=" text-button button"
                  >
                    Create
                  </Button>
                </>
              )}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
