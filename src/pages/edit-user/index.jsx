import FormUser from "../../components/form-user";
import { updateUserSchema } from "../../services/schemas";
import { useUsers } from "../../providers/users";
import { useParams, useHistory } from "react-router-dom";

const EditUser = () => {
  const { users } = useUsers();
  const { id } = useParams();
  const history = useHistory();

  //  TODO: Trocar para fazer um GET na API com o ID.

  const user = users.filter((user) => {
    return user.id === id;
  });

  if (user.length === 0) {
    history.push("/navers");
  }

  return (
    <div style={{ border: "3px red solid" }}>
      <FormUser type="update" schema={updateUserSchema} userInfo={user[0]} />
    </div>
  );
};

export default EditUser;
