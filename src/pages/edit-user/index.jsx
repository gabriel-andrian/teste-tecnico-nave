import React, { useEffect, useState } from "react";
import FormUser from "../../components/form-user";
import { updateUserSchema } from "../../services/schemas";
import { useUsers } from "../../providers/users";
import { useParams, useHistory } from "react-router-dom";

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
    <div>
      <FormUser type="update" schema={updateUserSchema} userInfo={user[0]} />
    </div>
  );
};

export default EditUser;
