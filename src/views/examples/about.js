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
        <h1 className="text-center" style={{color:"white"}}>About Us</h1>
      </div>


      <Container fluid>
      {/* Hero Section */}
      <Row className="bg-primary text-white py-5">
        <Col md={12} className="text-center">
          <h1>Welcome to [Your Company Name]!</h1>
          <p className="lead">We're dedicated to providing exceptional products and services that make a real difference.</p>
        </Col>
      </Row>

      {/* Our Story & Values */}
      <Row className="py-5">
        <Col md={6} className="text-center">
          <h3 className="mb-4">Our Story</h3>
          <p>
            Founded in [Year], [Your Company Name] began with a simple idea: [describe the initial vision or inspiration behind the company]. 
            Since then, we’ve grown into [mention milestones or achievements], thanks to our talented team and loyal customers.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <h3 className="mb-4">Our Values</h3>
          <ul className="list-unstyled">
            <li><strong>Quality</strong>: We never compromise on the quality of our products/services.</li>
            <li><strong>Customer First</strong>: Your satisfaction is our top priority.</li>
            <li><strong>Innovation</strong>: We are always looking for ways to improve and innovate.</li>
            <li><strong>Sustainability</strong>: We are committed to practices that support a healthier planet.</li>
          </ul>
        </Col>
      </Row>

      {/* Meet Our Team */}
      <Row className="bg-light py-5">
        <Col md={12} className="text-center mb-5">
          <h3>Meet Our Team</h3>
          <p className="lead">We have a passionate team dedicated to making a difference.</p>
        </Col>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm border-light">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>CEO & Founder</Card.Text>
                <Button variant="primary" className="w-100">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm border-light">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>Chief Technology </Card.Text>
                <Button variant="primary" className="w-100">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm border-light">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Mary Johnson</Card.Title>
                <Card.Text>Head of Marketing</Card.Text>
                <Button variant="primary" className="w-100">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>

      {/* Closing Section */}
      <Row className="text-center py-5 bg-dark text-white">
        <Col md={12}>
          <p>Thank you for visiting our About Us page! Feel free to contact us with any questions or inquiries.</p>
        </Col>
      </Row>
    </Container>
    </>
    );
}

export default AboutUs;
