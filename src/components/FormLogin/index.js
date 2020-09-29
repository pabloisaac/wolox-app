import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../storage/reducers";
import { setRedirectLogin, setRedirectList } from "../../storage/actions";
import { postLogin } from "../../services/http";
import { validateEmail, validatePassword } from "../../utils/utils";
import Text from "../Text";
import Logo from "../Logo";
import { Redirect } from "react-router-dom";
import "./login.css";

const Login = () => {
  const { state, dispatch } = useContext(AppContext);

  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  useEffect(() => {
    dispatch(setRedirectList(false));
    let storage = localStorage.getItem("user_data");
    let token = sessionStorage.getItem("token");
    if (storage !== null || token) dispatch(setRedirectLogin(true));
    else dispatch(setRedirectLogin(false));
  }, []);

  const onLogin = async () => {
    setErrorEmail(!validateEmail(email));
    setErrorPassword(!validatePassword(password));
    if (!errorEmail && !errorPassword) {
      let response = await postLogin(email, password);
      if (check) localStorage.setItem("user_data", { email, password });

      sessionStorage.setItem("token", response.token);
      dispatch(setRedirectLogin(true));
    }
  };

  const onCheck = () => {
    setCheck(!check);
  };

  const onChange = e => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      setErrorEmail(false);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
      setErrorPassword(false);
    }
  };

  return (
    <div className="container">
      <div className="form-login">
        <div className="content-logo">
          <Logo width="80%" />
        </div>
        <div className="content-form">
          {errorEmail && (
            <div className="msg-error">
              <Text
                text="*Email incorrecto, debe colocar email con formato correcto, ej email@wolox.com"
                size={10}
                color="red"
              />
            </div>
          )}
          <div className="flexbox-form">
            <div className="label">
              <label>Email: </label>
            </div>
            <div className="input">
              <input type="text" name="email" onChange={e => onChange(e)} />
            </div>
          </div>

          {errorPassword && (
            <div className="msg-error">
              <Text
                text="*Formato de contraseña incorrecto, debe colocar una contraseña entre 6 y 20 caracteres que contengan al menos un dígito numérico , una letra mayúscula y una minúscula"
                size={10}
                color="red"
              />
            </div>
          )}
          <div className="flexbox-form">
            <div className="label">
              <label>Contraseña: </label>
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                onChange={e => onChange(e)}
              />
            </div>
          </div>

          <div className="flexbox-form">
            <div className="checkbox">
              <input type="checkbox" onClick={onCheck} />
              <label className="check">Recordarme</label>
            </div>
          </div>

          <div className="flexbox-form">
            <div className="btn-submit">
              <input type="submit" value="Login" onClick={e => onLogin()} />
            </div>
          </div>
        </div>
      </div>
      {state.redirectLogin && <Redirect to="/list" />}
    </div>
  );
};

export default Login;
