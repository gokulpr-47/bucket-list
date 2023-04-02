import BucketHeader from "../components/reuse/BucketHeader";
import BucketComponents from "../components/lists/BucketComponents";
// import data from '../components/data.json';
import AddBucket from "../components/Popup/addBucket";
import JoinBucket from "../components/Popup/JoinBucket";
import usePop from "../hooks/usePop";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../util/initFirebase";
import useAuth from "../hooks/useAuth";
import { Row, Container } from "react-bootstrap";

const Bucket = () => {
  const username = "Gokul P R";
  const { pop, joinPop } = usePop();

  const [data, setData] = useState("");
  const { userid } = useAuth();

  //read bucket from the database
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setData("");
      const dbData = snapshot.val();
      if (dbData != null) {
        const userFind = Object.entries(dbData.users).find(
          (user) => user[0] === userid,
        );
        Object.keys(userFind[1]).map((user) =>
          Object.values(dbData.bucket).find(
            (buckets) =>
              // if (user === buckets.uuid) {
              user === buckets.uuid &&
              setData((prevState) => [...prevState, buckets]),
              // }
          ),
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bucket">
      <>
        <BucketHeader username={username} />
        <Container>
          <Row className="allItems m-0 p-0 justify-content-start">
            {data &&
              data.map((items) => {
                return <BucketComponents content={items} key={items.uuid} />;
              })}
          </Row>
        </Container>
        {pop && <AddBucket onClick={() => console.log("clicked")} />}
        {joinPop && <JoinBucket onClick={() => console.log("clicked")} />}
      </>
    </div>
  );
};

export default Bucket;
