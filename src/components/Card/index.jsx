import React from "react";
import DeleteModal from "../modal-delete";
import UserModal from "../modal-user";
import { EditFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Card = ({ userInfo }) => {
  return (
    <div>
      {userInfo.name && <UserModal userInfo={userInfo} />}
      <p>{userInfo.name}</p>
      <p>{userInfo.job_role}</p>
      <div>
        <DeleteModal id={userInfo.id} />
        <Link to={`/navers/${userInfo.id}`}>
          <EditFilled />
        </Link>
      </div>
    </div>
  );
};

export default Card;
