import React from "react";
import { useUsers } from "../../providers/users";
import UsersMap from "../users-map";

const Users = () => {
  const { loading } = useUsers();

  return <div>{loading ? <h1>LOADING...</h1> : <UsersMap />}</div>;
};

export default Users;
