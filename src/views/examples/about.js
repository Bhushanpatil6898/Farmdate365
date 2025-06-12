// AboutUs.js
import Header from 'components/Headers/Header';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutUs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set background size based on the window width
  let backgroundSize = 'cover'; // Default for larger screens

  if (windowWidth <= 768) {
    backgroundSize = '110% 100%'; // Adjust for tablets
  } else if (windowWidth <= 480) {
    backgroundSize = '200% 100%'; // Adjust for mobile devices
  } else if (windowWidth <= 375) {
    backgroundSize = '250% 100%'; // Adjust for very small screens
  }

  return (
    <>
      <div
        className="header d-flex align-items-center justify-content-center"
        style={{
          minHeight: '400px',
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2018/10/08/10/21/agriculture-3732476_960_720.jpg')",
          backgroundSize: backgroundSize,
          backgroundPosition: 'center center',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
          fontSize: '3rem',
        }}
      >
        <h1 className="text-center" style={{ color: "white" }}>About Us</h1>
      </div>


      <Container fluid>

        <Row className="bg-primary text-white py-5">
          <Col md={12} className="text-center">
            <h1>Welcome to FramData365!</h1>
            <p className="lead">  At FarmData365, we help farmers efficiently store, track, and manage their farm data. Our platform offers an easy-to-use solution for storing information about your farm, crops, and agricultural activities.</p>
          </Col>
        </Row>

        <Row className="py-5">
         
          <Col md={6} className="text-center">
            <h3 className="mb-4">Our Story</h3>
            <p>
              Founded in <strong>[2025]</strong>, <strong>FarmData365</strong> was born from a passion for helping farmers optimize their operations through data-driven insights.
              With the rise of technology in agriculture, we realized that farmers needed a reliable, easy-to-use platform to store and manage their farm data.
              Since then, we've grown into a trusted solution for thousands of farmers, providing tools for tracking crops, land size, weather patterns, and more.
            </p>
          </Col>

          {/* Our Values Section for FarmData */}
          <Col md={6} className="text-center">
            <h3 className="mb-4">Our Values</h3>
            <ul className="list-unstyled">
              <li><strong>Innovation</strong>: We are constantly developing new technologies and tools to make farming smarter and more efficient.</li>
              <li><strong>Integrity</strong>: We believe in honesty and transparency in all our dealings with farmers and partners.</li>
              <li><strong>Sustainability</strong>: Our platform is built to promote sustainable farming practices that protect the environment while increasing productivity.</li>
              <li><strong>Community</strong>: We value our relationships with farmers, and our goal is to build a supportive community where knowledge is shared, and growth is encouraged.</li>
            </ul>
          </Col>
        </Row>


        <Row className="text-center py-5 bg-dark text-white">
          <Col md={12}>
            <h2>Thank You for Visiting Our About Us Page!</h2>
            <p>
              We appreciate your interest in learning more about FarmData365. Feel free to reach out to us with any questions or inquiries, and we'll be happy to assist you.
            </p>
            <p>
              Whether you want to learn more about our services, share your feedback, or inquire about partnerships, we're here to help.
              Don't hesitate to <strong>contact us</strong>!
            </p>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default AboutUs;
  










  // <td className="text-right">
  //                     <UncontrolledDropdown>
  //                       <DropdownToggle
  //                         className="btn-icon-only text-light"
  //                         href="#pablo"
  //                         role="button"
  //                         size="sm"
  //                         color=""
  //                         onClick={(e) => e.preventDefault()}
  //                       >
  //                         <i className="fas fa-ellipsis-v" />
  //                       </DropdownToggle>
  //                       <DropdownMenu className="dropdown-menu-arrow" right>
  //                         <DropdownItem
  //                           href="#pablo"
  //                           onClick={(e) => e.preventDefault()}
  //                         >
  //                           Action
  //                         </DropdownItem>
  //                         <DropdownItem
  //                           href="#pablo"
  //                           onClick={(e) => e.preventDefault()}
  //                         >
  //                           Another action
  //                         </DropdownItem>
  //                         <DropdownItem
  //                           href="#pablo"
  //                           onClick={(e) => e.preventDefault()}
  //                         >
  //                           Something else here
  //                         </DropdownItem>
  //                       </DropdownMenu>
  //                     </UncontrolledDropdown>
  //                   </td>

//   <th scope="row">
//   <Media className="align-items-center">
//     <a
//       className="avatar rounded-circle mr-3"
//       href="#pablo"
//       onClick={(e) => e.preventDefault()}
//     >
//       <img
//         alt=".."
//         // src={require("../../assets/img/theme/vue.jpg")}
//       />
//     </a>
//     <Media>
//       <span className="mb-0 text-sm">
//         Vue Paper UI Kit PRO
//       </span>
//     </Media>
//   </Media>
// </th>