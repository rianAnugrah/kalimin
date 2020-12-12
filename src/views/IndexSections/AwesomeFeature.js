import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

export default function AwesomeFeature(props) {
  return (
    <div>
      <section className="section section-lg">
        <Container>
          <Row className="row-grid align-items-center">
            <Col className="order-md-2" md="6">
              {/* <img
                alt="..."
                className="img-fluid floating"
                src={require("assets/img/landing/platformer.png")}
              /> */}
              <iframe
                style={{ width: "100%", height: "300px" }}
                src="https://www.youtube.com/embed/6PYH6U67LQQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Col>
            <Col className="order-md-1" md="6">
              <div className="pr-md-5">
                {/* <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                  <i className="ni ni-settings-gear-65" />
                </div> */}
                <h3>Awesome gameplay</h3>
                <p>
                  The game we built are carefully crafted by talented developer
                  and artist. with Html5 and javascript technology you can play
                  our games anytime anywhere across platform with play on
                  browser capability.
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge className="badge-circle mr-3" color="success">
                          <i className="ni ni-settings-gear-65" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">Carefully crafted gameplay</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge className="badge-circle mr-3" color="success">
                          <i className="ni ni-html5" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">Cross platform</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge className="badge-circle mr-3" color="success">
                          <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">Super friendly support team</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
