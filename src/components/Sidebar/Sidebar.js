import { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import Logo from '../../assets/img/farmdata365-logo.png';
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Form,
  InputGroupText,
  Input,
} from "reactstrap";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
} from "reactstrap";
import { useUser } from "hook/user/useUser";

const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const { logout } = useUser();
  // Function to handle active route
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  // Toggle collapse between open and closed
  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  // Close the collapse when a link is clicked
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  const Onlogout = (e) => {
    e.preventDefault(); 
 
    logout();
  };
  // Generate sidebar links dynamically
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  const { routes } = props;

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light"
      expand="md"
      id="sidenav-main"
      style={{
        minHeight: "200px",
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
         // Ensure that the row can be positioned on top
      }}
    >
      <Container fluid>
        {/* Toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <NavbarBrand className="pt-0">
          <img
            className="navbar-brand-img img-fluid"
            src={Logo}
            alt="Brand Logo"
            style={{ maxHeight: '100px', maxWidth: '100%' }}
          />
        </NavbarBrand>

        {/* Collapse content */}
        <Collapse navbar isOpen={collapseOpen}>
          <Nav navbar>{createLinks(routes)}</Nav>
          {/* Divider */}
          <hr className="my-3" />
        </Collapse>
      </Container>

      {/* Row shown only when collapsed on small screen */}
      <Row
        className={`align-items-start d-flex d-md-none ${collapseOpen ? 'd-block' : 'd-none'}`}
        style={{
          position: "absolute",
          top: "0px", 
          left: "0",
          right: "0",
          zIndex: "1000", 
          padding: "10px",
        }}
      >
        <Col xs="4" md="6" className="d-flex justify-content-center" style={{height:"30px"}}>
          <Form className="navbar-search navbar-search-dark form-inline d-flex ml-sm-auto w-100" >
           
              <InputGroup className="input-group-alternative w-90" >
                <Input 
                  placeholder="Search" 
                  type="text" 
                  className="w-50" 
                  style={{ textAlign: 'center' }} 
                />
              </InputGroup>
          
          </Form>
        </Col>

        <Col xs="8" md="6" className="d-flex">
          <Nav className="align-items-end d-md-flex justify-content-start" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("../../assets/img/theme/mypic.jpg")}
                    />
                  </span>
                  <Media className="ml-1 d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      Bhushan Patil
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={Onlogout}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Col>
      </Row>

      {/* Media queries for setting different background images */}
      <style jsx="true">
        {`
          #sidenav-main {
            background-size: cover;
            background-position: left 20px;
            background-repeat: no-repeat;
          }

          /* Mobile (up to 767px) */
          @media (max-width: 767px) {
            #sidenav-main {
              background-image: url('https://media.istockphoto.com/id/1284342520/photo/indian-farmer-showing-fertilizer-bottle-at-field.jpg?s=612x612&w=0&k=20&c=CPGoSL-biM4RXS4xaW_Sd6hIUZCeDqB5xvMW5bKpmw0=');
            }
          }

          /* Laptop and larger (above 767px) */
          @media (min-width: 768px) {
            #sidenav-main {
              background-image: url('https://images.pexels.com/photos/544554/pexels-photo-544554.jpeg?auto=compress&cs=tinysrgb&w=600');
            }
          }
        `}
      </style>

    </Navbar>
  );
};

export default Sidebar;
