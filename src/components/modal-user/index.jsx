import React, { useState } from "react";
import DeleteModal from "../modal-delete";
import { EditFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { dateFormat } from "../../services/dateTime";
import { ModalStyled } from "../modal-delete/style";
import {
  IconsContainer,
  ModalContainer,
  InfosContainers,
  ImgContainer,
} from "./style";

const UserModal = ({ userInfo }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <ImgContainer>
        <img src={userInfo.url} alt="profile" onClick={showModal} />
      </ImgContainer>
      <ModalStyled
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <ModalContainer>
          <img src={userInfo.url} alt="profile" width={"50%"} />
          <InfosContainers>
            <h1>{userInfo.name}</h1>
            <p>{userInfo.job_role}</p>
            <h3>Idade</h3>
            <p>{dateFormat(userInfo.birthdate)}</p>
            <h3>Tempo de empresa</h3>
            <p>{dateFormat(userInfo.admission_date)}</p>
            <h3>Projetos que participou</h3>
            <p>{userInfo.project}</p>
            <IconsContainer>
              <div onClick={handleCancel}>
                <DeleteModal id={userInfo.id} />
              </div>
              <Link to={`/navers/${userInfo.id}`}>
                <EditFilled />
              </Link>
            </IconsContainer>
          </InfosContainers>
        </ModalContainer>
      </ModalStyled>
    </>
  );
};

export default UserModal;
