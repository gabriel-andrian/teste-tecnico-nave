import React from "react";
import { useUsers } from "../../providers/users";
import Card from "../Card";
import { Empty } from "antd";
import { UsersContainer } from "./style";

const UsersMap = () => {
  const { users } = useUsers();

  if (users.length === 0) {
    return <Empty />;
  }
  return (
    <UsersContainer>
      {users.map((user) => {
        return <Card userInfo={user} key={user.id} />;
      })}
    </UsersContainer>
  );
};

export default UsersMap;
