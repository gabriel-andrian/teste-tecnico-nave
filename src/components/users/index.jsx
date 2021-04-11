import React from "react";
import { useUsers } from "../../providers/users";
import UsersMap from "../users-map";
import { Spin } from "antd";
import { LoadingContainer } from "./style";

const Users = () => {
  const { loading } = useUsers();

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <Spin tip="Loading..." size="large" />
        </LoadingContainer>
      ) : (
        <UsersMap />
      )}
    </>
  );
};

export default Users;
