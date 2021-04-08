import React from "react";
import { useUsers } from "../../providers/users";
import UsersMap from "../users-map";

const Users = () => {
  const { loading } = useUsers();

  return <>{loading ? <h1>LOADING...</h1> : <UsersMap />}</>;
};

export default Users;
