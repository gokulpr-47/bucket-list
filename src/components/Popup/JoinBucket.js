import React, { useState } from "react";
import usePop from "../../hooks/usePop";
import useAuth from "../../hooks/useAuth";
import "./addBucket.css";
import { db } from "../../util/initFirebase";
import { ref, set, push } from "firebase/database";

const JoinBucket = () => {
  const { setJoinPop } = usePop();
  const { userid } = useAuth();
  const [bucketId, setBucketId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await set(ref(db, `users/${userid}/${bucketId}`), {
      uuid: bucketId,
    });
    const useridRef = ref(db, `bucket/${bucketId}/userid`);
    const newUseridRef = push(useridRef);
    await set(newUseridRef, { userid });
    setJoinPop((prevState) => !prevState);
  };

  return (
    <div
      className="bucketEntryContainer"
      onClick={(e) =>
        e.currentTarget === e.target && setJoinPop((prevState) => !prevState)
      }
    >
      <div className="bucketEntry">
        <form onSubmit={handleSubmit}>
          <p>Bucket Name:</p>
          <input
            className="bucketInput"
            onChange={(e) => setBucketId(e.target.value)}
          />
          <button type="submit">ADD</button>
        </form>
      </div>
    </div>
  );
};

export default JoinBucket;
