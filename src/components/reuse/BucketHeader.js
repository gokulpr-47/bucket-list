import { useState } from "react";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePop from "../../hooks/usePop";
import { useLocation } from "react-router-dom";
import { Dropdown, Col, Row } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

const BucketHeader = ({ bucketname, code, username }) => {
  const { setPop, setListPop, setJoinPop } = usePop();

  const [copied, setCopied] = useState(false);
  const location = useLocation();

  const addOptions = () => {
    location.pathname.substring(1) === "bucket"
      ? setPop((prevState) => !prevState)
      : setListPop((prevState) => !prevState);
    // bucketname && setListPop((prevState) => !prevState);
  };

  const joinOptions = () => {
    setJoinPop((prevState) => !prevState);
  };

  return (
    <Row className="bucketHeaderContainer px-3 px-md-5 mx-0">
      <Col
        className="name justify-content-start col-xs-8"
        xs={{ span: 8 }}
        sm={{ span: 6 }}
      >
        {/* ternary operation to display the username or bucketname and removing 'Bucketlist' from p tag with respect to the page rendered */}
        {/* <p>{bucketname ? bucketname : username}</p>
        {bucketname ? <p></p> : <p>'s Bucketlist,</p>} */}
        {bucketname ? bucketname : <p>{username}'s bucket</p>}

        {/* showing the code and copy button only when the name pros is passed */}
        {bucketname && (
          <>
            <p className="code">{code}</p>
            {/* prettier-ignore */}
            <CopyToClipboard text={code} onCopy={() => { setCopied(true); setTimeout(() => { setCopied(false); }, 2000); }} >
              <FontAwesomeIcon icon={faCopy} className="copy" />
            </CopyToClipboard>
            {copied ? <p className="copied">copied!</p> : ""}
          </>
        )}
      </Col>
      <Col className="add-button justify-content-end">
        {bucketname ? (
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
            onClick={addOptions}
          >
            +
          </Dropdown.Toggle>
        ) : (
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              +
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark" align={"start"}>
              <Dropdown.Item onClick={joinOptions}>Join Bucket</Dropdown.Item>
              <Dropdown.Item onClick={addOptions}>Create Bucket</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Col>
    </Row>
  );
};

export default BucketHeader;
