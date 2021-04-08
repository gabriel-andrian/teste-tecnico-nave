import FormUser from "../../components/form-user";
import { createUserSchema } from "../../services/schemas";
import { NewUserContainer, SectionTitle } from "./style";
import { useHistory } from "react-router-dom";

const NewUser = () => {
  const history = useHistory();

  return (
    <NewUserContainer>
      <SectionTitle>
        <a
          onClick={() => {
            history.push("/navers");
          }}
        >
          {"<"}
        </a>
        Adicionar Naver
      </SectionTitle>
      <FormUser type="create" schema={createUserSchema} />
    </NewUserContainer>
  );
};

export default NewUser;
