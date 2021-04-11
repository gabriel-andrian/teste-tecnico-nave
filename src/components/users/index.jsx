import React from "react";
import { useUsers } from "../../providers/users";
import UsersMap from "../users-map";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Alert } from "antd";
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
