import { ref, update } from "firebase/database";
import { useState } from "react";
import usePop from "../../hooks/usePop";
import { db } from "../../util/initFirebase";
import "./updateBucket.css";

const UpdateBucket = ({ uuid, listpath }) => {
  console.log("entered update bucket");
  const { setBucketEdit } = usePop();
  const [newBucketName, setNewBucketName] = useState();

  const handleSubmitBucket = (e) => {
    e.preventDefault();
    console.log("entere bucket");
    update(ref(db, `/bucket/${uuid}`), {
      bucketName: newBucketName,
    });
    setBucketEdit((prevState) => !prevState);
  };

  // const handleSubmitList = (e) => {
  //   e.preventDefault();
  //   console.log("entered");
  //   update(ref(db, listpath), {
  //     listName: newBucketName,
  //   });
  //   setBucketEdit((prevState) => !prevState);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("listpath : ", listpath);
    // listpath ? handleSubmitList(e) : handleSubmitBucket(e);
    handleSubmitBucket(e);
  };

  return (
    <div className="bigcontainer">
      <div
        className="updateBucketContainer"
        onClick={(e) =>
          e.currentTarget === e.target &&
          setBucketEdit((prevState) => !prevState)
        }
      >
        <div className="updateBucket">
          <form onSubmit={handleSubmit}>
            <p>Update Bucket Name:</p>
            <input
              className="updateInput"
              onChange={(e) => setNewBucketName(e.target.value)}
            />
            <button type="submit">Change</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBucket;
