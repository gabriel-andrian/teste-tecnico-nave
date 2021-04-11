import Users from "../../components/users";
import { ContainerContextHeader } from "./styled";
import { useHistory } from "react-router-dom";

const Navers = () => {
  const history = useHistory();

  return (
    <div>
      <ContainerContextHeader>
        <h1>Navers</h1>
        <button onClick={() => history.push("/navers/new")}>
          Adicionar Naver
        </button>
      </ContainerContextHeader>
      <Users></Users>
    </div>
  );
};

export default Navers;
