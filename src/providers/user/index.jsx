const { createContext, useContext, useState, useEffect } = require("react");

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const token = localStorage.getItem("token") || "";
  const [user, setUser] = useState(true);
  const [userToken, setUserToken] = useState(token);

  useEffect(() => {
    setUserToken(localStorage.getItem("token") || "");
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userToken,
        setUserToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
