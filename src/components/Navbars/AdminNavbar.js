import { useUser } from "hook/user/useUser";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Dropdown,
  Navbar,
  Container,
  Media,
  Nav
} from "reactstrap";
import { useEffect, useState } from "react";

const AdminNavbar = (props) => {
 
   const{getuser,userdata,logout}=useUser();

  
    useEffect(() => {
         getuser();
    
    }, []);
   
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control the dropdown

  // Toggle dropdown manually to handle mobile issues
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle logout
  const Onlogout = (e) => {
    e.preventDefault(); 
 
    logout();
    setDropdownOpen(false);
  };

  return (
    <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
      <Container fluid>
        <Link
          className="h1 mb-0  text-uppercase bg-white d-none d-lg-inline-block btn btn-outline-success px-4 py-2 rounded-3 transition-all hover:bg-success"
          to="/"
          style={{color:"orange"}}
        >
      {userdata?.farmName}
        </Link>

        <Nav className="align-items-center d-none d-md-flex" navbar>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle className="" nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={require("../../assets/img/theme/mypic.jpg")}
                  />
                </span>
                <Media className="ml-2 d-none d-lg-block">
                  <span className="h1 mb-0  text-uppercase bg-white d-none d-lg-inline-block btn btn-outline-success px-4 py-2 rounded-3 transition-all hover:bg-success"  style={{color:"orange"}}>
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
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
