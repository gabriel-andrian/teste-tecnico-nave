import React from "react";
import FormUser from "../../components/form-user";
import { updateUserSchema } from "../../services/schemas";
import { useUsers } from "../../providers/users";
import { useParams, useHistory } from "react-router-dom";
import { UserUpdateContainer } from "./style";

const EditUser = () => {
  const { users } = useUsers();
  const { id } = useParams();
  const history = useHistory();

  const user = users.filter((user) => {
    return user.id === id;
  });

  if (user.length === 0) {
    history.push("/navers");
  }

  return (
    <UserUpdateContainer>
      <FormUser type="update" schema={updateUserSchema} userInfo={user[0]} />
    </UserUpdateContainer>
  );
};

export default EditUser;
