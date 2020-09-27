import React, { useState, useContext } from "react";
import { AppContext } from '../../storage/reducers';
import { setLogin, setToken } from '../../storage/actions';
import { postLogin } from '../../services/http';
import { validateEmail, validatePassword } from '../../utils/utils';
import Text from '../Text';

const Login = () => {
  const { dispatch  } = useContext(AppContext);
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);


  const onLogin = async () => {
    setErrorEmail(!validateEmail(email));
    setErrorPassword(!validatePassword(password));
    if(!errorEmail && !errorPassword){
      let response = await postLogin(email, password);
      if(check)
        localStorage.setItem('remember_password', true);
      dispatch(setToken(response.token))
      dispatch(setLogin(true))
    }
  };

  const onCheck = () => {
    setCheck(!check);
  };

  const onChange = e => {
    setErrorEmail(false);
    setErrorPassword(false);
    if(e.target.name === "email"){
      setEmail(e.target.value)
    }
    if(e.target.name === "password"){
      setPassword(e.target.value)
    }
  };

  return (
    <div id="container">
      <label>Email: </label>
      <input type="text" name="email" onChange={e => onChange(e)}/>
      {errorEmail && <Text text='Email incorrecto, debe colocar email con formato correcto, ej email@wolox.com' size={10} />}

      <label>Contraseña: </label>
      <input type="password" name="password" onChange={e => onChange(e)}/>
      {errorPassword && <Text text='Formato de contraseña incorrecto, debe colocar una contraseña entre 6 y 20 caracteres que contengan al menos un dígito numérico , una letra mayúscula y una minúscula' size={10} /> }
      <div id="lower">
        <input type="checkbox" onClick={onCheck} />
        <label className="check">Recordarme</label>
        <input type="submit" value="Login" onClick={onLogin} />
      </div>
    </div>
  );
};

export default Login;
