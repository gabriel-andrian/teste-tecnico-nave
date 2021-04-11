import * as yup from "yup";


export const Loginschema = yup.object().shape({
  email: yup
    .string()
    .required(" O e-mail não pode estar vazio.")
    .email("Formato de e-mail inválido."),
  password: yup
    .string()
    .required("A senha não pode estar vazia.")
    .min(6, "Senha deve ter pelo menos seis caracteres."),
});


export const createUserSchema = yup.object().shape({
    job_role: yup.string().required("Cargo obrigatório."),
    admission_date: yup
      .string()
      .matches(
        /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
        "Formato invalido. ex 25/10/2015."
      )
      .required("Tempo de empresa obrigatório."),
    birthdate: yup
      .string()
      .matches(
        /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
        "Formato invalido. ex 20/12/1993."
      )
      .required("Data de nascimento obrigatória."),
    project: yup.string().required("Projetos obrigatórios."),
    name: yup.string().required("Nome obrigatório."),
    url: yup.string().required("Url obrigatória."),
  });
  
  export const updateUserSchema = yup.object().shape({
    job_role: yup.string().min(3, "Cargo deve ter pelo menos três caracteres."),
    admission_date: yup
      .string()
      .matches(
        /^$|^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
        "Formato invalido. ex 25/10/2015."
      ),
    birthdate: yup
      .string()
      .matches(
        /^$|^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
        "Formato invalido. ex 20/12/1993."
      ),
    project: yup.string(),
    name: yup.string().min(3, "Nome deve ter pelo menos três caracteres."),
    url: yup.string().min(6, "Url deve ter pelo menos cinco caracteres."),
  });