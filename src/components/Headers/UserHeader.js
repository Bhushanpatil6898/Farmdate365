
import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set dynamic minHeight and background-image size based on window size
  let minHeight = "400px"; // Default height
  let backgroundSize = "cover"; // Default background size

  if (windowWidth <= 480) {
    minHeight = "200px";
    backgroundSize = "contain"; // Compress the image to fit entirely within the div
  } else if (windowWidth <= 768) {
    minHeight = "20px";
    backgroundSize = "contain"; // Image fits but may have empty space
  } else if (windowWidth <= 1200) {
    minHeight = "200px";
    backgroundSize = "cover"; // Full cover for larger screens
  }

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: minHeight,
          width: "100%", // Keeps div width at full screen
          backgroundImage: "url('https://t3.ftcdn.net/jpg/04/46/80/58/240_F_446805862_gaVtn5Do46naFWtAu9eqPB9OvMiM2wQs.jpg')",
          backgroundSize: backgroundSize,
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >


        <span className="mask  opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello Bhushan</h1>
              <p className="text-white mt-0 mb-5">
                Manage your farm's data, track seasonal progress, and monitor your crops and resources.
                Stay organized and take control of your agricultural projects with ease.
              </p>
              <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
