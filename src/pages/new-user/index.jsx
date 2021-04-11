import FormUser from "../../components/form-user";
import { createUserSchema } from "../../services/schemas";
import { NewUserContainer } from "./style";

const NewUser = () => {
  return (
    <NewUserContainer>
      <FormUser type="create" schema={createUserSchema} />
    </NewUserContainer>
  );
};

export default NewUser;
