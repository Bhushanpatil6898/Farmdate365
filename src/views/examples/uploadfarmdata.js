import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

import { FaSeedling, FaMapMarkerAlt, FaImage, FaTag } from 'react-icons/fa';
import { useUser } from "hook/user/useUser";

const Farmdataupload = () => {

 const{getuser,userdata,uploadfarmdata}=useUser();
useEffect(()=>{
  getuser();
  
})

const farm=userdata?.farmName;
  const [formData, setFormData] = useState({
    farmName: '',
    farmSize: '',
    farmLocation: '',
    seedToSow: '', 
    seedVariety: '',
    image:null
  });
 
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle image selection
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], // Save the selected file
    });
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
  
    const formDataToSend = new FormData();
    formDataToSend.append('farmName', formData.farmName);
    formDataToSend.append('farm', farm);
    formDataToSend.append('farmSize', formData.farmSize);
    formDataToSend.append('farmLocation', formData.farmLocation);
    formDataToSend.append('seedToSow', formData.seedToSow);
    formDataToSend.append('seedVariety', formData.seedVariety);
    
    if (formData.image) {
      formDataToSend.append('farm_image', formData.image); // Only append image if available
    }
  
    try {
      const response = await uploadfarmdata(formDataToSend); // Assuming this sends FormData to your API
  
      if (response.ok) {
        alert('Farm data uploaded successfully!');
      } else {
        setErrorMessage('Error uploading farm data.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while uploading the farm data.');
    } finally {
      setLoading(false);
    }
};

  
  
  return (
    <div className="header pb-8 pt-4 pt-lg-8 "
             style={{
              minHeight: "700px",
              backgroundImage: "url('https://i0.wp.com/razzanj.com/wp-content/uploads/2016/07/nature-landscape-nature-landscape-hd-image-download-wheat-farm-hd-wallpaper-notebook-background-wheat-farmers-wheat-farming-process-wheat-farming-in-kenya.jpg?ssl=1')",
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}>
    <Container  >
      <Row className="justify-content-center">
        <Col lg="6" md="8" sm="12">
        <Card
              className=" border-3 mt-5 p-4"
              
              style={{
                backgroundColor: "transparent", 
              
              }}>
            <h1 className="text-center">Upload Farm Data</h1>
            {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="farm_name"  className="text-dark">
                  <FaTag /> Farm Name
                </Label>
                <Input
                  type="text"
                  id="farm_name"
                  name="farmName"
                  value={formData.farmName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter farm name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="farm_size" className="text-dark">
                  <FaSeedling /> Farm Size (acres)
                </Label>
                <Input
                  type="number"
                  id="farm_size"
                  name="farmSize"
                  value={formData.farmSize}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter farm size in acres"
                />
              </FormGroup>

              {/* Farm Location */}
              <FormGroup>
                <Label for="farm_location"  className="text-dark">
                  <FaMapMarkerAlt /> Farm Location
                </Label>
                <Input
                  type="text"
                  id="farm_location"
                  name="farmLocation"
                  value={formData.farmLocation}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter farm location"
                />
              </FormGroup>

              {/* Seed to Sow (single select) */}
              <FormGroup>
                <Label for="seed_to_sow"  className="text-dark">
                  <FaSeedling /> Seed to Sow
                </Label>
                <Input
                  type="select"
                  id="seed_to_sow"
                  name="seedToSow"
                  value={formData.seedToSow}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a seed variety</option>
                  <option value="corn">Corn</option>
                  <option value="wheat">Wheat</option>
                  <option value="rice">Rice</option>
                  <option value="soybean">Soybean</option>
                  <option value="tomato">Tomato</option>
                  <option value="potato">Potato</option>
                  <option value="cotton">Cotton</option>
                  {/* Add more seed varieties here */}
                </Input>
              </FormGroup>

              {/* Seed Variety (specific variety for the selected seed) */}
              <FormGroup>
                <Label for="seed_variety"  className="text-dark">
                  <FaTag /> Seed Variety
                </Label>
                <Input
                  type="text"
                  id="seed_variety"
                  name="seedVariety"
                  value={formData.seedVariety}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter seed variety "
                />
              </FormGroup>

            
              <FormGroup>
                <Label for="farm_image"  className="text-dark">
                  <FaImage /> Farm Image
                </Label>
                <Input
                  type="file"
                  id="farm_image"
                  name="farmImage"
                  onChange={handleImageChange}
                  required
                />
                {formData.image && (
                  <div className="mt-3">
                    <h5>Selected Image:</h5>
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Farm Preview"
                      className="img-fluid"
                      style={{ maxHeight: '200px', maxWidth: '100%' }}
                    />
                  </div>
                )}
              </FormGroup>

              <Button color="primary" type="submit" block disabled={loading}>
                {loading ? 'Uploading...' : 'Submit'}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Farmdataupload;
