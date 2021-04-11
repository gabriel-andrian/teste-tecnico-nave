import { UserProvider } from "./user";
import { UsersProvider } from "./users";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <UsersProvider>{children}</UsersProvider>
    </UserProvider>
  );
};

export default Providers;
