    import React, {useState} from "react";
    import Button from "@material-ui/core/Button";
    import { Row, Col, Card, Form } from "react-bootstrap";
    import Grid from '@material-ui/core/Grid';
    import Modal from '@material-ui/core/Modal';
    import { makeStyles } from '@material-ui/core/styles';
    import TextField from '@material-ui/core/TextField';
    const axios = require("axios");

    export default function Home(props) {
    

          const [gender, setgender] = useState("0");
          const [Partner, setPartner] = useState("0");
          const [Dependents, setDependents] = useState("0");
          const [tenure, settenure] = useState(0);
          const [InternetService, setInternetService] = useState("0");
          const [OnlineSecurity, setOnlineSecurity] = useState("0");
          const [OnlineBackup, setOnlineBackup] = useState("0");
          const [DeviceProtection, setDeviceProtection] = useState("0");
          const [TechSupport, setTechSupport] = useState("0");
          const [StreamingTV, setStreamingTV] = useState("0");
          const [StreamingMovies, setStreamingMovies] = useState("0");
          const [Contract, setContract] = useState("0");
          const [PaperlessBilling, setPaperlessBilling] = useState("0");
          const [PaymentMethod, setPaymentMethod] = useState("0");
          const [MonthlyCharges, setMonthlyCharges] = useState(0);
          const [result, setresult] = useState("");
          const [user_name, setuser_name] = useState("");
          const [open, setopen] = useState(false);
        return (
          <div
            style={{
              backgroundImage: "linear-gradient(90deg, rgba(212,222,240,1) 0%, rgba(125,159,218,1) 54%, rgba(32,136,222,1) 100%)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "150vh",
              // opacity: 0.7
            }}        
          >
          <Modal
				style={{ marginTop:"20%", width:"40%" ,marginLeft:"30%" }}
				open={open}
				onClose={() => setopen(false)} center>
				<React.Fragment>
					<Grid container spacing={3} style={{ backgroundColor: '#ffffff', padding: '3%' }}>

						
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<TextField
								id="Name"
								name="Name"
								label="Enter Name"
								autoComplete="given-name"
								variant="outlined"
								fullWidth
								value={user_name}
								onChange={(event) => setuser_name(event.target.value)}
							/>
						</Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: 4,
                      paddingLeft: 8,
                      paddingRight: 8,
                   
                      marginLeft: "32%",
                    
                      fontSize: 16,
                    }}
                    type="submit"
                    component="span"
                    onClick={(e) => {
                      e.preventDefault();
                      setopen(true)
                      const userdata = {
                        uri: [
                          gender,
                          Partner, 
                          Dependents,
                          tenure.toString(), 
                          InternetService,
                          OnlineSecurity, 
                          OnlineBackup, 
                          DeviceProtection, 
                          TechSupport,
                          StreamingTV, 
                          StreamingMovies, 
                          Contract, 
                          PaperlessBilling,
                          PaymentMethod, 
                          MonthlyCharges.toString()
                        ]

                          
                      }
                      const options = {
                        url: localStorage.getItem("url") + "/churn",
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        data: JSON.stringify(userdata),
                      };

                      console.log(userdata);

                      axios(options).then((response) => {
                        if (response.status == 200) {
                          console.log(response.data.data);
                         setresult(response.data.data)
                         setopen(false)
                            
                         
                       
                        }
                      });
                                           
                                           

                    }}
                  >
                     PREDICT RESULT
                  </Button>
						</Grid>
</Grid>
				</React.Fragment>
			</Modal>


              <Row className="" >
              

                                    <Col md={6} className="d-flex justify-content-center">
                                        <Form style={{marginLeft:400,marginTop:80, width:300}}> 
                                        <Form.Group controlId="formBasicSelect">
            <Form.Label> GENDER</Form.Label>
            <Form.Control
              as="select"
              value={gender}
              onChange={e => {
              
                setgender(e.target.value);
              }}
            >
                                        <option value="1">Male</option>
                                          <option value="0">Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Label> PARTNER</Form.Label>
            <Form.Control
              as="select"
              value={Partner}
              onChange={e => {
              
                setPartner(e.target.value);
              }}
            >
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
            </Form.Control>
          </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>TENURE</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="TENURE"
                                                    value={tenure}
                                                    onChange={(event) => { settenure(event.target.value) }}
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>MONTHLY CHARGES</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="MONTHLY CHARGES"
                                                    value={MonthlyCharges}
                                                    onChange={(event) => { setMonthlyCharges(event.target.value) }}
                                                />
                                            </Form.Group>


          


                                          
    <Form.Group controlId="formBasicSelect">
            <Form.Label> INTERNET SERVICE</Form.Label>
            <Form.Control
              as="select"
              value={InternetService}
              onChange={e => {
              
                setInternetService(e.target.value);
              }}
            >
                                        <option value="0">DSL</option>
                                        <option value="1">Fiber optic</option>
                                        <option value="2">No</option>

                                      

            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Label>CONTRACT</Form.Label>
            <Form.Control
              as="select"
              value={Contract}
              onChange={e => {
              
                setContract(e.target.value);
              }}
            >
                                        <option value="0">Month-to-month</option>
                                        <option value="1">One year</option>
                                        <option value="2">Two year</option>

                                      

            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Label>PAYMENT METHOD</Form.Label>
            <Form.Control
              as="select"
              value={PaymentMethod}
              onChange={e => {
              
                setPaymentMethod(e.target.value);
              }}
            >
                                        <option value="0">Bank transfer (automatic)</option>
                                        <option value="1">Credit card (automatic)</option>
                                        <option value="2">Electronic check</option>
                                        <option value="3">Mailed check</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Label>PAPERLESS BILLING</Form.Label>
            <Form.Control
              as="select"
              value={PaperlessBilling}
              onChange={e => {
              
                setPaperlessBilling(e.target.value);
              }}
            >
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
            </Form.Control>
          </Form.Group>


                                        </Form>
                                    </Col>



                                    
                                    <Col md={6} className="d-flex justify-content-left">
                                      <Form style={{marginLeft:0,marginTop:80, width:230}} >
                                    <Form.Group controlId="formBasicSelect">
            <Form.Label> DEPENDENT</Form.Label>
            <Form.Control
              as="select"
              value={Dependents}
              onChange={e => {
              
                setDependents(e.target.value);
              }}
            >
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicSelect">
            <Form.Label> ONLINE SECURITY</Form.Label>
            <Form.Control
              as="select"
              value={OnlineSecurity}
              onChange={e => {
              
                setOnlineSecurity(e.target.value);
              }}
            >
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
            </Form.Control>
          </Form.Group>


          <Form.Group controlId="formBasicSelect">
            <Form.Label> ONLINE BACKUP</Form.Label>
            <Form.Control
              as="select"
              value={OnlineBackup}
              onChange={e => {
              
                setOnlineBackup(e.target.value);
              }}
            >
                                        <option value="2">Yes</option>
                                        <option value="0">No</option>
                                        <option value="1">No Internet Service</option>
            </Form.Control>
          </Form.Group>


          <Form.Group controlId="formBasicSelect">
            <Form.Label> DEVICE PROTECTION</Form.Label>
            <Form.Control
              as="select"
              value={DeviceProtection}
              onChange={e => {
              
                setDeviceProtection(e.target.value);
              }}
            >
                                        <option value="2">Yes</option>
                                        <option value="0">No</option>
                                        <option value="1">No Internet Service</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Label> TECH SUPPORT</Form.Label>
            <Form.Control
              as="select"
              value={TechSupport}
              onChange={e => {
              
                setTechSupport(e.target.value);
              }}
            >
                                        <option value="2">Yes</option>
                                        <option value="0">No</option>
                                        <option value="1">No Internet Service</option>
            </Form.Control>
          </Form.Group>


          <Form.Group controlId="formBasicSelect">
            <Form.Label> STREAMING TV</Form.Label>
            <Form.Control
              as="select"
              value={StreamingTV}
              onChange={e => {
              
                setStreamingTV(e.target.value);
              }}
            >
                                        <option value="2">Yes</option>
                                        <option value="0">No</option>
                                        <option value="1">No Internet Service</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Label> STREAMING MOVIES</Form.Label>
            <Form.Control
              as="select"
              value={StreamingMovies}
              onChange={e => {
              
                setStreamingMovies(e.target.value);
              }}
            >
                                        <option value="2">Yes</option>
                                        <option value="0">No</option>
                                        <option value="1">No Internet Service</option>
            </Form.Control>
          </Form.Group>

          
          <Button
                    variant="contained"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: 4,
                      paddingLeft: 8,
                      paddingRight: 8,
                      marginTop: "14%",
                      marginLeft: "17%",
                    
                      fontSize: 16,
                    }}
                    type="submit"
                    component="span"
                    onClick={(e) => {
                      setuser_name("")
                      setopen(true)
                    }}
                  >
                     SUBMIT
                  </Button>
        

          </Form>          
                                          
                                    </Col>
                  
                  
    </Row>
    
        
            <h1 style={{ textAlign: "center", marginTop: "4%" ,color:'white'}}>{result=="churn"?user_name+" is about to churn.Please initiate some retention strategies":result=="not churn"?user_name+" will be retained and expected to continue our services":""}</h1>
          </div>
        );
                  }

