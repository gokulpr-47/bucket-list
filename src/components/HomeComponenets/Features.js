import {
  faList,
  faUserGroup,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import featureImage from "../../assets/page2.svg";
import "./Feature.css";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

export default function Features() {
  return (
    <Container fluid>
      <Row className="features-container justify-content-center align-items-center">
        <Col xs={12} sm={12} md={6} lg={6} className="mb-5 mb-sm-5 mb-md-0">
          <img src={featureImage} alt="features" />
        </Col>

        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="features-lists flex-grow-0"
        >
          <div className="features-items">
            <Parallax translateX={[0, 5]}>
              <div className="item-details">
                <div className="list-circle">
                  <FontAwesomeIcon icon={faList} className="list" />
                </div>
                <div className="list-content">
                  <p className="p1">ORGANIZE YOUR GOALS IN A LIST.</p>
                  <p className="p2">
                    Keep a record of what you want to accomplish.
                  </p>
                </div>
              </div>
            </Parallax>
          </div>

          <div className="features-items">
            <Parallax translateX={[0, -10]}>
              <div className="item-details">
                <div className="list-circle">
                  <FontAwesomeIcon icon={faHeart} className="list" />
                </div>
                <div className="list-content">
                  <p className="p1">HELP FRIENDS WITH THEIR GOALS.</p>
                  <p className="p2">
                    Meet people with similar goals and help them.
                  </p>
                </div>
              </div>
            </Parallax>
          </div>
          <div className="features-items">
            <Parallax translateX={[0, 5]}>
              <div className="item-details">
                <div className="list-circle">
                  <FontAwesomeIcon icon={faUserGroup} className="list" />
                </div>
                <div className="list-content">
                  <p className="p1">MAKE GROUPS AND COLLABORATE.</p>
                  <p className="p2">
                    Collaborate or plan events for your group.
                  </p>
                </div>
              </div>
            </Parallax>
          </div>

          <div className="features-items">
            <Parallax translateX={[0, -10]}>
              <div className="item-details">
                <div className="list-circle">
                  <FontAwesomeIcon icon={faCheck} className="list" />
                </div>
                <div className="list-content">
                  <p className="p1">CROSS ITEMS OFF.</p>
                  <p className="p2">
                    Let your people know that you have accomplished it.
                  </p>
                </div>
              </div>
            </Parallax>
          </div>
        </Col>
      </Row>
    </Container>
    // <div className="features-container">
    //   <div className="pic2">
    //     <img src={featureImage} alt="features" />
    //   </div>
    //   <div className="features-lists">
    //     <div className="features-items">
    //       <div className="item-details">
    //         <div className="list-circle">
    //           <FontAwesomeIcon icon={faList} className="list" />
    //         </div>
    //         <div className="list-content">
    //           <p className="p1">ORGANIZE YOUR GOALS IN A LIST.</p>
    //           <p className="p2">
    //             Keep a record of what you want to accomplish.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="features-items">
    //       <div className="item-details">
    //         <div className="list-circle">
    //           <FontAwesomeIcon icon={faHeart} className="list" />
    //         </div>
    //         <div className="list-content">
    //           <p className="p1">HELP FRIENDS WITH THEIR GOALS.</p>
    //           <p className="p2">
    //             Meet people with similar goals and help them.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="features-items">
    //       <div className="item-details">
    //         <div className="list-circle">
    //           <FontAwesomeIcon icon={faUserGroup} className="list" />
    //         </div>
    //         <div className="list-content">
    //           <p className="p1">MAKE GROUPS AND COLLABORATE.</p>
    //           <p className="p2">Collaborate or plan events for your group.</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="features-items">
    //       <div className="item-details">
    //         <div className="list-circle">
    //           <FontAwesomeIcon icon={faCheck} className="list" />
    //         </div>
    //         <div className="list-content">
    //           <p className="p1">CROSS ITEMS OFF.</p>
    //           <p className="p2">
    //             Let your people know that you have accomplished it.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
