import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { navedexAPI } from "../../services/api";
import { useUser } from "../../providers/user";
import { dateConvert } from "../../services/dateTime";
import { FormContainer } from "./style";

const FormUser = ({ type, schema, userInfo = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { userToken } = useUser();

  const handleForm = (data) => {
    const serializerData = {
      admission_date: data.admission_date
        ? data.admission_date
        : dateConvert(userInfo.admission_date),
      birthdate: data.birthdate
        ? data.birthdate
        : dateConvert(userInfo.birthdate),
      job_role: data.job_role ? data.job_role : userInfo.job_role,
      name: data.name ? data.name : userInfo.name,
      project: data.project ? data.project : userInfo.project,
      url: data.url ? data.url : userInfo.url,
    };

    const authConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

    if (type === "create") {
      navedexAPI
        .post("/navers", serializerData, { headers: authConfig })
        .then(({ data }) => {
          console.log(data);
          // fazer push no array de users.
        })
        .catch(({ response }) => {
          console.log(response);
          // Talvez fazer uma page error 500 e redirecionar (?)
        });
    }

    if (type === "update") {
      navedexAPI
        .put(`/navers/${userInfo.id}`, serializerData, { headers: authConfig })
        .then(({ data }) => {
          console.log(data);
        })
        .catch(({ response }) => {
          console.log(response);
          // Talvez fazer uma page error 500 e redirecionar (?)
        });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleForm)}>
      <label>Nome</label>
      <input {...register("name")} />
      <p>{errors.name?.message}</p>
      <label>Idade</label>
      <input {...register("birthdate")} />
      <p>{errors.birthdate?.message}</p>
      <label>Projetos que participou</label>
      <input {...register("project")} />
      <p>{errors.project?.message}</p>
      <label>Cargo</label>
      <input {...register("job_role")} />
      <p>{errors.job_role?.message}</p>
      <label>Tempo de empresa</label>
      <input {...register("admission_date")} />
      <p>{errors.admission_date?.message}</p>
      <label>URL da foto do Naver</label>
      <input {...register("url")} />
      <p>{errors.url?.message}</p>
      <input type="submit" value="Salvar" />
    </FormContainer>
  );
};

export default FormUser;
