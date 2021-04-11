import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";
import { ContainerError } from "./style";
import { HistoryOutlined } from "@ant-design/icons";

const ServerError = () => {
  const history = useHistory();

  return (
    <ContainerError>
      <Result
        status="500"
        title="500"
        subTitle="Desculpe. Alguma coisa saiu errado, por favor tente mais tarde."
        extra={
          <Button type="primary" onClick={() => history.push("/navers")}>
            Voltar
          </Button>
        }
      />
    </ContainerError>
  );
};
export default ServerError;
