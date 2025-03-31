import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';
import { FaMapMarkerAlt, FaSeedling, FaTag } from 'react-icons/fa';
import { useUser } from 'hook/user/useUser';
import { BaseURL } from 'repository/repository';

const AllFarmDataPage = () => {
  const { getfarmdata, farmdata } = useUser();
  const [farmData, setFarmData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFarm, setSelectedFarm] = useState(null);  // State for selected farm for modal
  const [modal, setModal] = useState(false);  // Modal toggle state

  useEffect(() => {
    getfarmdata();
    setFarmData(farmdata);
    setLoading(false); // Set loading to false after data is set
  }, [farmdata]);

  // Toggle modal visibility
  const toggleModal = () => setModal(!modal);

  // Handle "View Details" click, set selected farm and open modal
  const handleViewDetails = (farm) => {
    setSelectedFarm(farm);
    toggleModal();
  };

  if (loading) {
    return <Spinner>Loading...</Spinner>;
  }

  return (
    <div className="header pb-8 pt-4 pt-lg-8 "
      style={{
        minHeight: "700px",
        backgroundImage: "url('https://i0.wp.com/razzanj.com/wp-content/uploads/2016/07/nature-landscape-nature-landscape-hd-image-download-wheat-farm-hd-wallpaper-notebook-background-wheat-farmers-wheat-farming-process-wheat-farming-in-kenya.jpg?ssl=1')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}>
      <Container>
        <h2 className="text-center mb-4">All Farm Data</h2>
        <Row>
          {/* Loop through all farm data and render cards */}
          {farmData ? (
            farmData.map((farm, index) => (
              <Col md="4" sm="6" key={index} className="mb-4">
                <Card className="align-items-center">
                  <img
                    alt="Farm Image"
                    src={`${BaseURL}/${farm.farmImage}`}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectPosition: 'center',
                      objectFit: 'contain',
                      borderRadius: "10px"
                    }}
                  />
                  <CardBody>
                    <CardTitle tag="h5">{farm.farmName}</CardTitle>
                    <CardText>
                      <strong><FaSeedling /> Seed to Sow:</strong> {farm.seedToSow}
                    </CardText>
                    <CardText>
                      <strong><FaMapMarkerAlt /> Location:</strong> {farm.farmLocation}
                    </CardText>
                    <CardText>
                      <strong><FaTag /> Size:</strong> {farm.farmSize} acres
                    </CardText>
                    <Button color="primary" onClick={() => handleViewDetails(farm)}>View Details</Button>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
            <Col className="text-center">
              <p>No farm data available</p>
            </Col>
          )}
        </Row>
      </Container>

      {/* Modal to show full farm details */}
      {selectedFarm && (
        <Modal isOpen={modal} toggle={toggleModal} size="lg">
           <ModalHeader >{selectedFarm.farm} </ModalHeader>
          <ModalHeader>{selectedFarm.farmName} - Details</ModalHeader>
          <ModalBody>
            <img
              alt="Farm Image"
              src={`${BaseURL}/${selectedFarm.farmImage}`}
              className="img-fluid"
              style={{
                width: '100%',
                height: 'auto',  // Make sure it scales properly with screen size
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '20px',
                objectPosition: 'center',
              }}
            />
            <CardText>
              <strong><FaSeedling /> Seed to Sow:</strong> {selectedFarm.seedToSow}
            </CardText>
            <CardText>
              <strong><FaMapMarkerAlt /> Location:</strong> {selectedFarm.farmLocation}
            </CardText>
            <CardText>
              <strong><FaTag /> Size:</strong> {selectedFarm.farmSize} acres
            </CardText>
            <CardText>
              <strong>Seed Variety:</strong> {selectedFarm.seedVariety}
            </CardText>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

export default AllFarmDataPage;
