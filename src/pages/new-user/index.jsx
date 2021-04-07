import FormUser from "../../components/form-user";
import { createUserSchema } from "../../services/schemas";

const NewUser = () => {
  return (
    <div>
      <FormUser type="create" schema={createUserSchema} />
    </div>
  );
};

export default NewUser;
