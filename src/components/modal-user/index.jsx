import React, { useState } from "react";
import { Modal } from "antd";
import DeleteModal from "../modal-delete";
import { EditFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { dateFormat } from "../../services/dateTime";

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
      <img
        src="https://www.leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg"
        alt="profile"
        onClick={showModal}
        width={"20%"}
      />

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src="https://www.leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/25.jpg"
            alt="profile"
            width={"50%"}
          />
          <div>
            <h1>{userInfo.name}</h1>
            <p>{userInfo.job_role}</p>
            <h3>Idade</h3>
            <p>{dateFormat(userInfo.birthdate)}</p>
            <h3>Tempo de empresa</h3>
            <p>{dateFormat(userInfo.admission_date)}</p>
            <h3>Projetos que participou</h3>
            <p>{userInfo.project}</p>
            <div onClick={handleCancel}>
              <DeleteModal id={userInfo.id} />
            </div>
            <Link to={`/navers/${userInfo.id}`}>
              <EditFilled />
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserModal;
