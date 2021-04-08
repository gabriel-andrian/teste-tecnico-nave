import React from "react";
import { useUsers } from "../../providers/users";
import Card from "../Card";
import { UsersContainer } from "./style";

const UsersMap = () => {
  const { users } = useUsers();

  return (
    <UsersContainer>
      {users.map((user) => {
        return <Card userInfo={user} key={user.id} />;
      })}
    </UsersContainer>
  );
};

export default UsersMap;
