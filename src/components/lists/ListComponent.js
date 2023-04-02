import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "../../util/initFirebase";
import { onValue, ref, update, remove } from "firebase/database";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
// import usePop from "../../hooks/usePop";
// import UpdateBucket from "../Popup/UpdateBucket";
import moment from "moment";
import { Col } from "react-bootstrap";

const ListComponent = ({ content, bucket }) => {
  // const { isEdit, setIsEdit } = usePop();
  const { listName, uuid, lastedit, time } = content;
  const [checked, setChecked] = useState(content.checked);
  const navigate = useNavigate();
  const location = useLocation();

  const path = `${location.pathname}/${uuid}`;

  const { userid } = useAuth();

  const starCountRef = ref(db, path);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
    console.log("path: ", path);
    update(ref(db, path), {
      checked: !checked,
    });
  };

  const deleteBucket = async () => {
    await remove(ref(db, path));
  };

  const handleUpdate = () => {
    // setIsEdit((prevState) => !prevState);
  };

  function BucketItemsOnClick() {
    navigate(`${location.pathname}/${uuid}/editor`, {
      state: {
        listName,
        path,
        uuid,
        bucket,
      },
    });

    onValue(
      starCountRef,
      (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        if (!data.activeUser && data.activeUser !== userid) {
          update(ref(db, path), {
            activeUser: userid,
          });
        }
      },
      {
        onlyOnce: true,
      },
    );
  }

  return (
    <Col
      className="ListItemsContainer d-flex p-0 justify-content-center justify-content-md-start"
      xs={{ span: 12 }}
      sm={12}
      md={6}
      lg={6}
    >
      <div className="ListItems">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <div
          className="ps-4 d-flex w-100 h-100 align-items-center justify-content-between"
          onClick={BucketItemsOnClick}
        >
          <div>
            <p className="listName">{listName}</p>
          </div>
          <div className="ListDetails">
            <p className="lastedit">{time}</p>
            <p>{moment(new Date(lastedit)).fromNow()}</p>
          </div>
        </div>
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
      {/* {isEdit && <UpdateBucket uuid={uuid} list={true} listpath={path} />} */}
    </Col>
  );
};

export default ListComponent;
