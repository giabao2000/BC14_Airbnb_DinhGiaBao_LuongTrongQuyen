import { useState } from "react";
import { useDispatch } from "react-redux";
import { actLoginApi } from "./modules/Login/actions";
import { actRegisterApi } from "./modules/Register/actions";

const useFormRegister = (validateRegister) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    address: "",
    type: "CLIENT",
  });

  const [errors, setErrors] = useState({});

  const handleOnChangeRegister = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    setErrors(validateRegister(values));
    dispatch(actRegisterApi(values));
  };

  return { handleOnChangeRegister, handleSubmitRegister, values, errors };
};

const useFormLogin = (validateLogin, history) => {
  const dispatch = useDispatch();

  const [infoLogin, setInfoLogin] = useState({
    email: "",
    password: "",
  });

  const [errorsLogin, setErrors] = useState({});

  const handleOnChangeLogin = (e) => {
    const { name, value } = e.target;

    setInfoLogin({
      ...infoLogin,
      [name]: value,
    });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    setErrors(validateLogin(infoLogin));
    dispatch(actLoginApi(infoLogin, history));
  };

  return { handleOnChangeLogin, handleSubmitLogin, infoLogin, errorsLogin };
};

export { useFormRegister, useFormLogin };
