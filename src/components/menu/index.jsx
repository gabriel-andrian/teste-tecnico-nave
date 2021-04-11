import React from "react";
import { useUser } from "../../providers/user";
import logo from "../../logo.svg";
import { MenuContainer } from "./styled";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const { userToken, setUser, user } = useUser();
  const history = useHistory();

  const handleClick = () => {
    localStorage.clear("token");
    setUser(!user);
  };

  return (
    <>
      {userToken && (
        <MenuContainer>
          <img
            style={{ cursor: "pointer" }}
            src={logo}
            alt="NaveLogo"
            onClick={() => history.push("/navers")}
          />{" "}
          <a onClick={() => handleClick()}>Sair</a>
        </MenuContainer>
      )}
    </>
  );
};

export default Menu;
