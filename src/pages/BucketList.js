import BucketHeader from "../components/reuse/BucketHeader";
import ListComponent from "../components/lists/ListComponent";
// import data from '../components/data.json';
import { useLocation } from "react-router-dom";
import usePop from "../hooks/usePop";
import AddList from "../components/Popup/AddList";
import { onValue, ref } from "firebase/database";
import { db } from "../util/initFirebase";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

function BucketList() {
  const location = useLocation();
  // const navigate = useNavigate();

  const [listData, setListData] = useState("");

  const { listPop } = usePop();

  const bucketCode = location.state.code;
  let bucketname = location.state.bucketName;

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setListData(() => "");
      const dbListData = snapshot.val();
      if (dbListData !== null) {
        var bucketObj = Object.values(dbListData.bucket).find(
          (buckets) => buckets.bucketName === bucketname,
        );

        if (bucketObj !== null && bucketObj.list)
          bucketObj.list &&
            Object.values(bucketObj.list).map((lists) => {
              setListData((prevState) => {
                return [...prevState, lists];
              });
            });
      }
    });
  }, []);

  return (
    <div className="App">
      <>
        <BucketHeader bucketname={bucketname} code={bucketCode} />
        <Container>
          <Row className="allItems m-0 p-0 justify-content-start">
            {/* {data.lists.map((items) => { */}
            {listData &&
              listData.map((items) => {
                return (
                  <ListComponent
                    content={items}
                    bucket={bucketname}
                    key={items.uuid}
                  />
                );
              })}
          </Row>
        </Container>
        {listPop && <AddList />}
      </>
    </div>
  );
}

export default BucketList;
