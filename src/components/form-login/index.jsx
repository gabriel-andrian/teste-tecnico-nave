import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { navedexAPI } from "../../services/api";
import logo from "../../logo.svg";
import { useUser } from "../../providers/user";
import { FormContainer, ImgStyled } from "./style";
import { Loginschema } from "../../services/schemas";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Loginschema),
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
    <FormContainer onSubmit={handleSubmit(handleForm)}>
      <ImgStyled src={logo} alt="logo" />
      <label>E-mail</label>
      <input {...register("email")} placeholder="E-mail" />
      <p>{errors.email?.message}</p>
      <label>Senha</label>
      <input {...register("password")} placeholder="Senha" />
      <p>{errors.password?.message}</p>
      <input type="submit" value="Entrar" />
      <p>{userToken}</p>
    </FormContainer>
  );
};

export default FormLogin;
