import React, { Component } from "react";
import {
  Button,
  Navbar,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClass: "",
      sideBarHidden: false,
    };
  }

  toggleSideBar = e => {
    let activeClass = "";
    if (this.state.activeClass !== "active") {
      activeClass = "active";
    } else {
      activeClass = "";
    }
    this.setState({ activeClass });
  };

  render() {
    return (
      <div className="wrapper">
        <Navbar id="sidebar" className={this.state.activeClass}>
          <section className="flex-card">
            <Card className="sidebar-header">
              <CardImg
                className="profile-picture rounded-circle img-fluid"
                top
                width="100%"
                src="https://s3.amazonaws.com/portfolio.lewismatos.com/images/LewisMatosThumbnail.png"
                alt="Card image cap"
              />
            </Card>
          </section>
          <section className="flex-list">
            <ListGroup>
              <ListGroupItem className="flex-list-item" tag="a" href="#" action>
                Summary
              </ListGroupItem>
              <ListGroupItem className="flex-list-item" tag="a" href="#" action>
                Certification
              </ListGroupItem>
              <ListGroupItem className="flex-list-item" tag="a" href="#" action>
                Experience
              </ListGroupItem>
              <ListGroupItem className="flex-list-item" tag="a" href="#" action>
                Profile
              </ListGroupItem>
              <ListGroupItem className="flex-list-item" tag="a" href="#" action>
                About
              </ListGroupItem>
            </ListGroup>
          </section>
        </Navbar>

        <div id="content">
          <Button onClick={this.toggleSideBar} type="button" id="sideBarCollapse" className="btn btn-info navbar-btn">
            <i className="glyphicon glyphicon-align-left" />
            {this.state.activeClass === "" ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    );
  }
}

export default Nav;
