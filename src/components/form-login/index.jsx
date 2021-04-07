import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { navedexAPI } from "../../services/api";

import { useUser } from "../../providers/user";

const schema = yup.object().shape({
  email: yup.string().required(" O e-mail não pode estar vazio.").email(),
  password: yup
    .string()
    .required("A senha não pode estar vazia.")
    .min(6, "Senha deve ter pelo menos seis caracteres"),
});

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { setUserToken, userToken } = useUser();

  const handleForm = (data) => {
    navedexAPI
      .post("/users/login", data)
      .then(({ data }) => {
        setUserToken(JSON.stringify(data.token));
        localStorage.setItem("token", JSON.stringify(data.token));
      })
      .catch(({ response }) => {
        const formError = {
          type: "server",
          message: response.data.message,
        };
        setError("password", formError);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <label>E-mail</label>
      <input {...register("email")} placeholder="E-mail" />
      <p>{errors.email?.message}</p>
      <label>Senha</label>
      <input {...register("password")} placeholder="Senha" />
      <p>{errors.password?.message}</p>
      <input type="submit" />
      <p>{userToken}</p>
    </form>
  );
};

export default FormLogin;
