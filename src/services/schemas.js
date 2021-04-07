import * as yup from "yup";


export const createUserSchema = yup.object().shape({
    job_role: yup.string().required("Job is required"),
    admission_date: yup
      .string()
      .matches(
        /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
        "Formato invalido. ex 25/10/2015"
      )
      .required("admission is required"),
    birthdate: yup
      .string()
      .matches(
        /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
        "Formato invalido. ex 20/12/1993"
      )
      .required("birthdate is required"),
    project: yup.string().required("project is required"),
    name: yup.string().required("Name is required"),
    url: yup.string().required("url is required"),
  });
  
  export const updateUserSchema = yup.object().shape({
    job_role: yup.string(),
    admission_date: yup
      .string()
      .matches(
        /^$|^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
        "Formato invalido. ex 25/10/2015"
      ),
    birthdate: yup
      .string()
      .matches(
        /^$|^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
        "Formato invalido. ex 20/12/1993"
      ),
    project: yup.string(),
    name: yup.string(),
    url: yup.string(),
  });