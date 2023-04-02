import { createContext, useState } from "react";

const PopContext = createContext({});

export const PopProvider = ({ children }) => {
  const [pop, setPop] = useState(false); //pop to add bucket and update bucket
  const [bucketEdit, setBucketEdit] = useState(false); //pop to edit bucket or lists
  const [listPop, setListPop] = useState(false); //pop to add lists
  const [joinPop, setJoinPop] = useState(false); //pop to join bucket

  return (
    <PopContext.Provider
      value={{
        pop,
        setPop,
        bucketEdit,
        setBucketEdit,
        listPop,
        setListPop,
        joinPop,
        setJoinPop,
      }}
    >
      {children}
    </PopContext.Provider>
  );
};

export default PopContext;
