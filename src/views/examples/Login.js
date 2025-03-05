import { useState } from "react";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Row, Col } from "reactstrap";
import { useUser } from "hook/user/useUser";
import { OrbitProgress } from "react-loading-indicators";

const Login = () => {
  const { getlogin, genrateotp } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(""); // State to hold OTP
  const [loading, setLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState("password"); // State to track selected login method
  const [otpGenerated, setOtpGenerated] = useState(false); // State to track if OTP is generated

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = { email };

    if (loginMethod === "password" && password) {
      data.password = password;
    } else if (loginMethod === "otp" && otp) {
      data.otp = otp;
    }
    const response = await getlogin(data);
    if (response) {
      setLoading(false);
    } else {
      console.log("Login failed!");
      
    }
  };

  const handleGenerateOtp = async() => {
    let data = { email };
   setLoading(true);
    const response = await  genrateotp(data);
   
    if (response.status==200) {
      setLoading(false);
      setOtpGenerated(true);
      console.log('====================================');
      console.log(response);
      console.log('====================================');
    } else {
      console.log("Login failed!");
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="loading-container">
          <div className="d-flex justify-content-center align-items-center vh-100 position-fixed w-100 h-100" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
            <OrbitProgress variant="spokes" color="#32cd32" size="medium" text="Loading" textColor="black" />
          </div>
        </div>
      )}

      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon m-1 btn-responsive"
                color="default"
                onClick={() => {
                  setLoginMethod("password");
                  setOtpGenerated(false); // Reset OTP when switching to password
                }}
              >
                <span className="btn-inner--icon">
                  <img alt="..." src={require("../../assets/img/icons/common/icons8-google-password.svg").default} />
                </span>
                <span className="btn-inner--text">Password</span>
              </Button>
              <Button
                className="btn-neutral btn-icon btn-responsive"
                color="default"
                onClick={() => {
                  setLoginMethod("otp");
                  setOtpGenerated(false); // Reset OTP field if switching to OTP
                }}
              >
                <span className="btn-inner--icon">
                  <img alt="..." src={require("../../assets/img/icons/common/icons8-rsa-otp-token-80.png")} />
                </span>
                <span className="btn-inner--text">OTP</span>
              </Button>
            </div>
          </CardHeader>

          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="new-email"
                    required
                  />
                </InputGroup>
              </FormGroup>

              {/* Conditional Rendering for Password / OTP */}
              {loginMethod === "password" && (
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="new-password"
                      required
                    />
                  </InputGroup>
                </FormGroup>
              )}

              {loginMethod === "otp" && !otpGenerated && (
                <div className="text-center mb-4">
                  <Button color="primary" onClick={handleGenerateOtp}>
                    Generate OTP
                  </Button>
                </div>
              )}

              {loginMethod === "otp" && otpGenerated && (
                <>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="OTP"
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        autoComplete="new-otp"
                      />
                    </InputGroup>
                  </FormGroup>

                  <div className="text-center">
                    <Button className="my-4" color="primary" type="submit">
                      Sign in
                    </Button>
                  </div>
                </>
              )}
               {loginMethod === "password"  && (
                <>
                  

                  <div className="text-center">
                    <Button className="my-4" color="primary" type="submit">
                      Sign in
                    </Button>
                  </div>
                </>
              )}

            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
