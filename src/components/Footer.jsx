import React from "react";

import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div id="footerCont">
          <footer className=" footer">
            <Container>
              <Row className=" row-grid align-items-center mb-5">
                <Col lg="6">
                  <h3 className=" text-primary font-weight-light mb-3">
                    Thanks for stopping by !
                  </h3>
                  <h4 className=" mb-0 font-weight-light">
                    We hope you learned a lot about fitness.
                  </h4>
                </Col>
              </Row>
              <hr />
              <Row className=" align-items-center justify-content-md-between">
                <Col md="6">
                  <div className=" copyright">
                    <p>
                      © {new Date().getFullYear()} Nakarda Richards Productions
                    </p>
                  </div>
                </Col>
                <Col md="6">
                  <Nav className=" nav-footer justify-content-end">
                    <NavItem>
                      <NavLink
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Our Gaming Club "
                        href="https://nakardareact-testsite1.netlify.app/"
                        target="_blank"
                      >
                        Dark Gamer
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tooltip"
                        data-placement="top"
                        title="About Us Page Again"
                        href="#about"
                      >
                        About Us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tooltip"
                        data-placement="top"
                        title="My GitHub Account"
                        href="https://github.com/NakardaRichards"
                        target="_blank"
                      >
                        GitHub
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      </>
    );
  }
}

export default Footer;
