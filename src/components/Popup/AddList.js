import { useState } from "react";
import "./addBucket.css";
import usePop from "../../hooks/usePop";
// import data from './data.json';
import { uid } from "uid";
import { db } from "../../util/initFirebase";
import { set, ref } from "firebase/database";
// import { serverTimestamp } from "firebase/database";
import { useLocation } from "react-router-dom";

const AddList = () => {
  const { setListPop } = usePop();
  const [listName, setListName] = useState("");

  const location = useLocation();

  //add bucket to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `${location.pathname}/${uuid}`), {
      activeUser: null,
      checked: false,
      listName,
      uuid,
      lastedit: null,
    });
    setListPop((prevState) => !prevState);
    setListName("");
  };
  return (
    <div
      className="bucketEntryContainer"
      onClick={(e) =>
        e.currentTarget === e.target && setListPop((prevState) => !prevState)
      }
    >
      <div className="bucketEntry">
        <form onSubmit={handleSubmit}>
          <p>List Name:</p>
          <input
            className="bucketInput"
            onChange={(e) => setListName(e.target.value)}
          />
          <button type="submit">ADD</button>
        </form>
      </div>
    </div>
  );
};

export default AddList;
