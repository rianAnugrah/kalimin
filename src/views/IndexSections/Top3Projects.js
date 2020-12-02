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

export default function Top3Projects(props) {
  return (
    <section className="section section-lg pt-lg-0 mt--200">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardImg
                    top
                    width="100%"
                    src={require("assets/img/landing/platformer.png")}
                    alt="Card image cap"
                  />
                  <CardBody className="py-5">
                    <h6 className="text-primary text-uppercase">Lavania</h6>
                    <p className="description mt-3">
                      Lavania is an action platformer, metroidvania like, give
                      you classic control and mobile touch support
                    </p>
                    <div>
                      <Badge color="primary" pill className="mr-1">
                        action
                      </Badge>
                      <Badge color="primary" pill className="mr-1">
                        platformer
                      </Badge>
                      <Badge color="primary" pill className="mr-1">
                        classic
                      </Badge>
                    </div>
                    <Button
                      className="mt-4"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Play now
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardImg
                    top
                    width="100%"
                    src={require("assets/img/landing/shooter.jpg")}
                    alt="Card image cap"
                  />
                  <CardBody className="py-5">
                    <h6 className="text-success text-uppercase">RUSTED GEAR</h6>
                    <p className="description mt-3">
                      Casual clicker game, with various collectable unit and
                      thriling challenges climb the leaderboard!
                    </p>
                    <div>
                      <Badge color="success" pill className="mr-1">
                        clicker
                      </Badge>
                      <Badge color="success" pill className="mr-1">
                        casual
                      </Badge>
                      <Badge color="success" pill className="mr-1">
                        collectable
                      </Badge>
                    </div>
                    <Button
                      className="mt-4"
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      PLAY NOW
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardImg
                    top
                    width="100%"
                    src={require("assets/img/landing/rpg.jpg")}
                    alt="Card image cap"
                  />
                  <CardBody className="py-5">
                    <h6 className="text-warning text-uppercase">
                      Fallen kingdom
                    </h6>
                    <p className="description mt-3">
                      Your kingdom has fallen! you queen is dying! try your best
                      to rebuild your kingdom and revive you most precious Queen
                    </p>
                    <div>
                      <Badge color="warning" pill className="mr-1">
                        adventure
                      </Badge>
                      <Badge color="warning" pill className="mr-1">
                        puzzle
                      </Badge>
                      <Badge color="warning" pill className="mr-1">
                        rpg
                      </Badge>
                    </div>
                    <Button
                      className="mt-4"
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      PLAY NOW
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
