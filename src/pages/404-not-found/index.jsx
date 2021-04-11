import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Desculpe, a página que você está tentando visitar não existe."
        extra={
          <Button type="primary" onClick={() => history.push("/navers")}>
            Voltar
          </Button>
        }
      />
      ,
    </>
  );
};

export default NotFound;
