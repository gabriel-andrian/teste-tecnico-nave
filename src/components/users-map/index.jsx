import React from "react";
import { useUsers } from "../../providers/users";
import Card from "../Card";
import { Empty } from "antd";

const UsersMap = () => {
  const { users } = useUsers();

  if (users.length === 0) {
    return <Empty />;
  }
  return (
    <div>
      {users.map((user) => {
        return <Card userInfo={user} key={user.id} />;
      })}
    </div>
  );
};

export default UsersMap;
