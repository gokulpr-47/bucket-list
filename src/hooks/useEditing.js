import { useContext } from "react";
import { EditingContext } from "../Context/EditingContext";

const useEditing = () => {
  return useContext(EditingContext);
};

export default useEditing;
