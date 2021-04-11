import FormUser from "../../components/form-user";
import { createUserSchema } from "../../services/schemas";
import { NewUserContainer } from "./style";
import { useHistory } from "react-router-dom";

const NewUser = () => {
  const history = useHistory();

  return (
    <NewUserContainer>
      <FormUser type="create" schema={createUserSchema} />
    </NewUserContainer>
  );
};

export default NewUser;
