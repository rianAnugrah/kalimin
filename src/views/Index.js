/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Button, Card, CardBody, Badge } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections

import SimpleFooter from "components/Footers/SimpleFooter.js";
import AwesomeFeature from "./IndexSections/AwesomeFeature.js";
import Top3Projects from "./IndexSections/Top3Projects.js";
import HeroLanding from "./IndexSections/HeroLanding.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <HeroLanding />
          <Top3Projects />

          <AwesomeFeature />
        </main>

        <SimpleFooter />
      </>
    );
  }
}

export default Index;
