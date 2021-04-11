import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { navedexAPI } from "../../services/api";
import { useUser } from "../../providers/user";
import { useUsers } from "../../providers/users";
import { dateConvert } from "../../services/dateTime";
import {
  ContextContainer,
  FormContainer,
  InputBox,
  SpanStyled,
  UserDetailsContainer,
  ButtonContainer,
  SectionTitle,
} from "./style";
import SucessModal from "../modal-sucess";

const FormUser = ({ type, schema, userInfo = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [visibleSucessCreate, setSucessCreateVisible] = useState(false);
  const [visibleSucessUpdate, setSucessUpdateVisible] = useState(false);

  const history = useHistory();
  const { update, setUpdate } = useUsers();
  const { userToken } = useUser();

  const closeSucessCreateModel = () => {
    setUpdate(!update);
    setSucessCreateVisible(false);
    history.push("/navers");
  };

  const closeSucessUpdateModel = () => {
    setUpdate(!update);
    setSucessUpdateVisible(false);
    history.push("/navers");
  };

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
          setSucessCreateVisible(true);
        })
        .catch(({ response }) => {
          history.push("/server-error");
        });
    }

    if (type === "update") {
      navedexAPI
        .put(`/navers/${userInfo.id}`, serializerData, { headers: authConfig })
        .then(({ data }) => {
          setSucessUpdateVisible(true);
        })
        .catch(({ response }) => {
          console.log(response);
          history.push("/server-error");
        });
    }
  };

  return (
    <>
      <ContextContainer>
        <FormContainer>
          <SectionTitle>
            <a
              onClick={() => {
                history.push("/navers");
              }}
            >
              {"<"}
            </a>
            {type === "create" ? "Adicionar Naver" : "Editar Naver"}
          </SectionTitle>
          <form id="RegisterForm" onSubmit={handleSubmit(handleForm)}>
            <UserDetailsContainer>
              <InputBox>
                <SpanStyled error={errors.name}>
                  {errors.name ? errors.name.message : "Nome"}
                </SpanStyled>
                <input {...register("name")} placeholder="Nome" />
              </InputBox>
              <InputBox>
                <SpanStyled error={errors.job_role}>
                  {errors.job_role ? errors.job_role.message : "Cargo"}
                </SpanStyled>
                <input {...register("job_role")} placeholder="Cargo" />
              </InputBox>
              <InputBox>
                <SpanStyled error={errors.birthdate}>
                  {errors.birthdate ? errors.birthdate.message : "Idade"}
                </SpanStyled>
                <input {...register("birthdate")} placeholder="Idade" />
              </InputBox>
              <InputBox>
                <SpanStyled error={errors.admission_date}>
                  {errors.admission_date
                    ? errors.admission_date.message
                    : "Tempo de empresa"}
                </SpanStyled>
                <input
                  {...register("admission_date")}
                  placeholder="Tempo de empresa"
                />
              </InputBox>
              <InputBox>
                <SpanStyled error={errors.project}>
                  {errors.project
                    ? errors.project.message
                    : "Projetos que participou"}
                </SpanStyled>
                <input
                  {...register("project")}
                  placeholder="Projetos que participou"
                />
              </InputBox>
              <InputBox>
                <SpanStyled error={errors.url}>
                  {errors.url ? errors.url.message : "URL da foto do Naver"}
                </SpanStyled>
                <input
                  {...register("url")}
                  placeholder="URL da foto do Naver"
                />
              </InputBox>
            </UserDetailsContainer>
            <ButtonContainer>
              <input type="submit" value="Salvar" form="RegisterForm" />
            </ButtonContainer>
          </form>
        </FormContainer>
      </ContextContainer>
      <SucessModal
        title="Naver criado"
        visible={visibleSucessCreate}
        onCancel={closeSucessCreateModel}
      >
        <p>Naver criado com sucesso!</p>
      </SucessModal>
      <SucessModal
        title="Naver atualizado"
        visible={visibleSucessUpdate}
        onCancel={closeSucessUpdateModel}
      >
        <p>Naver atualizado com sucesso!</p>
      </SucessModal>
    </>
  );
};

export default FormUser;
