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

export default function HeroLanding(props) {
  return (
    <div className="position-relative">
      {/* shape Hero */}
      <section className="section section-lg section-shaped pb-250">
        <div className="shape shape-style-1 shape-default">
          <img
            alt="..."
            // className="rounded-circle"
            src={require("assets/img/landing/bg.png")}
          />
        </div>

        <Container className="py-lg-md d-flex">
          <div className="col px-0">
            <Row>
              <Col lg="6">
                <h1 className="display-3 text-white">
                  Having serious fun <span>Having fun seriously.</span>
                </h1>
                <p className="lead text-white">
                  We love everything about games – playing them, making them,
                  especially if you played the game we made.
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="btn-icon"
                    color="warning"
                    href="https://www.patreon.com/kalimin"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fab fa-patreon" />
                    </span>
                    <span className="nav-link-inner--text ml-1">
                      Become a patron
                    </span>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
      {/* 1st Hero Variation */}
    </div>
  );
}
