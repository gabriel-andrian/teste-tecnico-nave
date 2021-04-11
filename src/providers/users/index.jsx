import { navedexAPI } from "../../services/api";
import { useUser } from "../user";
const { createContext, useContext, useState, useEffect } = require("react");

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(true);

  const { userToken } = useUser();

  useEffect(() => {
    if (userToken !== "") {
      async function getUsers() {
        const authConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };
        const response = await navedexAPI.get("/navers", {
          headers: authConfig,
        });
        setUsers(response.data);
        setLoading(false);
      }
      getUsers();
    }
  }, [userToken, update]);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        loading,
        setLoading,
        update,
        setUpdate,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
export const useUsers = () => useContext(UsersContext);
