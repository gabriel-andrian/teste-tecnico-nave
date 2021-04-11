import React from "react";
import { ModalStyled } from "./style";

const SucessModal = ({ title, visible, onCancel, children }) => {
  return (
    <ModalStyled
      title={title}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      style={{ marginTop: "20vh" }}
      maskStyle={{ background: "rgba(0, 0, 0, 0.8)" }}
    >
      {children}
    </ModalStyled>
  );
};

export default SucessModal;
