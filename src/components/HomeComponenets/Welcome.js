import React from "react";
import "./Welcome.css";
import welcomeImage from "../../assets/welcome.svg";
import { Container, Row, Col } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container fluid>
      <Row className="full-height">
        {/* <div className="col-xs-12 col-sm-6 xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}"> */}
        <Col
          xs={{ span: 12, order: "second" }}
          sm={{ span: 12 }}
          md={{ span: 6, order: "first" }}
          lg={6}
        >
          <div className="welcome-text">
            <h3>Welcome to the BUCKET &lt;li&gt;</h3>
            <p>
              A collaborative platform for creating and sharing your bucket
              list. Start building your ultimate bucket list today!
            </p>
          </div>
        </Col>
        {/* <div className="col-6 col-xs-pull-6 d-none d-lg-block "> */}
        <Col
          xs={{ span: 12, order: "first" }}
          sm={{ span: 12 }}
          md={{ span: 6, order: "second" }}
          lg={6}
        >
          <div className="welcome-image">
            <img src={welcomeImage} alt="welcome" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
