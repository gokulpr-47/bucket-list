import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ref, remove, update, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import usePop from "../../hooks/usePop";
import { db } from "../../util/initFirebase";
import UpdateBucket from "../Popup/UpdateBucket";
import { useLocation, useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";

const BucketComponent = ({ content }) => {
  const { bucketEdit, setBucketEdit } = usePop();
  const { bucketName, uuid, list } = content;

  const location = useLocation();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const dbData = snapshot.val();
      if (dbData !== null)
        Object.entries(dbData.bucket).map((bucket) => {
          if (bucket[0] === uuid) {
            Object.values(bucket[1].userid).map((user) => {
              //stores the userids from the buckets to users state
              setUsers((prevState) => [...prevState, user.userid]);
            });
          }
        });
    });
  }, []);

  const deleteBucket = async () => {
    users.map((user, i) => {
      // removing the userid from the users array
      remove(ref(db, `users/${user}/${uuid}`));
    });
    //removing the userid from the bucket array
    await remove(ref(db, `/bucket/${uuid}`));
  };

  const handleUpdate = () => {
    setBucketEdit((prevState) => !prevState);
  };

  return (
    <Col
      className="BucketItemsContainer d-flex p-0 justify-content-center justify-content-md-start"
      xs={{ span: 12 }}
      sm={12}
      md={6}
      lg={6}
    >
      <div
        className="BucketItems"
        onClick={() => {
          navigate(`/bucket/${uuid}/list`, {
            state: {
              bucketName: bucketName,
              code: uuid,
            },
          });
        }}
      >
        <div className="BucketDetails">
          <p>{bucketName}</p>
          <p className="bucketCode">{uuid}</p>
        </div>
        <p className="itemsCount">{list ? Object.keys(list).length : 0}</p>
      </div>
      <div className="hoverItems">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="trash"
          onClick={deleteBucket}
        />
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="edit"
          onClick={handleUpdate}
        />
      </div>
      {bucketEdit && <UpdateBucket uuid={uuid} />}
      {/* {<UpdateBucket uuid={uuid} />} */}
    </Col>
  );
};

export default BucketComponent;
