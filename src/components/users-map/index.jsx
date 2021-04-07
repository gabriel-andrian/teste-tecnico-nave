import React from "react";
import { useUsers } from "../../providers/users";
import Card from "../Card";

const UsersMap = () => {
  const { users } = useUsers();

  return (
    <div>
      {users.map((user) => {
        return <Card userInfo={user} key={user.id} />;
      })}
    </div>
  );
};

export default UsersMap;
