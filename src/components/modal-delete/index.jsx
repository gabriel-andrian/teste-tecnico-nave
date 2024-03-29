import React, { useState } from "react";
import { ModalStyled } from "./style";
import { navedexAPI } from "../../services/api";
import { useUser } from "../../providers/user";
import { useUsers } from "../../providers/users";
import { DeleteFilled } from "@ant-design/icons";
import SucessModal from "../modal-sucess";
import { useHistory } from "react-router-dom";

const DeleteModal = ({ id }) => {
  const history = useHistory();
  const { userToken } = useUser();
  const [visible, setConfirmVisible] = useState(false);
  const [visible2, setSucessVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const { setLoading, loading, update, setUpdate } = useUsers();

  const showConfirmModal = () => {
    setConfirmVisible(true);
  };

  const handleDelete = async () => {
    setConfirmLoading(true);
    const authConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

    let response = await navedexAPI
      .delete(`navers/${id}`, {
        headers: authConfig,
      })
      .catch((error) => {
        history.push("/server-error");
      });

    setConfirmVisible(false);
    setSucessVisible(true);
  };

  const handleCancel = () => {
    setConfirmVisible(false);
  };

  const closeSucessModel = () => {
    setLoading(!loading);
    setUpdate(!update);
    setSucessVisible(false);
  };

  return (
    <>
      <DeleteFilled onClick={showConfirmModal} />
      <ModalStyled
        style={{ marginTop: "20vh" }}
        title="Excluir Naver"
        visible={visible}
        onOk={handleDelete}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        closable={false}
        maskStyle={{ background: "rgba(0, 0, 0, 0.8)" }}
      >
        <p>Tem certeza que deseja excluir este Naver?</p>
      </ModalStyled>
      <SucessModal
        title="Naver excluído"
        visible={visible2}
        onCancel={closeSucessModel}
      >
        <p>Naver excluído com sucesso!</p>
      </SucessModal>
    </>
  );
};

export default DeleteModal;
