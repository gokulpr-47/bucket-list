import { useState } from "react";
import "./addBucket.css";
import usePop from "../../hooks/usePop";
// import data from './data.json';
import { uid } from "uid";
import { db } from "../../util/initFirebase";
import { set, ref, push } from "firebase/database";
import useAuth from "../../hooks/useAuth";

const AddBucket = () => {
  const { setPop } = usePop();
  const [bucketName, setBucketName] = useState("");

  const { userid } = useAuth();

  //add bucket to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    //generating uid for buckets
    const uuid = uid();
    //creating new array for bucket for details - bucketname, uuid, lists, userid.
    await set(ref(db, `bucket/${uuid}`), {
      bucketName,
      uuid,
      lists: {},
      userid: {},
    });
    //creating reference for userid to update the userid whenver they join or leave the bucket
    const useridRef = ref(db, `bucket/${uuid}/userid`);
    const newUseridRef = push(useridRef);
    //adding uuid to the bucket array about the user whenver the user joins the bucket
    await set(newUseridRef, { userid });
    //adding uuid to the users array whenever the user joins the bucket
    await set(ref(db, `users/${userid}/${uuid}`), {
      uuid,
    });
    setPop((prevState) => !prevState);
    setBucketName("");
  };

  return (
    <div
      className="bucketEntryContainer"
      onClick={(e) =>
        e.currentTarget === e.target && setPop((prevState) => !prevState)
      }
    >
      <div className="bucketEntry">
        <form onSubmit={handleSubmit}>
          <p>Bucket Name:</p>
          <input
            className="bucketInput"
            onChange={(e) => setBucketName(e.target.value)}
          />
          <button type="submit">ADD</button>
        </form>
      </div>
    </div>
  );
};

export default AddBucket;
