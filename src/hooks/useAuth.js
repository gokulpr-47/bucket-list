import { useContext } from "react";
import { UserContext } from "../Context/AuthContext";

const useAuth = () => {
  return useContext(UserContext);
};

export default useAuth;
