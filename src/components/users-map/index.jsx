import React from "react";
import { useUsers } from "../../providers/users";
import Card from "../Card";
import { EmptyStled, UsersContainer } from "./style";
import { Link } from "react-router-dom";

const UsersMap = () => {
  const { users } = useUsers();

  if (users.length === 0) {
    return (
      <EmptyStled
        description={
          <span>
            Ops... Navers vazio, <Link to="/navers/new">click aqui</Link> para
            adicionar um naver!
          </span>
        }
      />
    );
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
