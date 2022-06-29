import React, { useState, useEffect } from 'react';
import {
    Card, 
    Button,
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import "./viewdashboard.css";
import { useNavigate } from 'react-router-dom';

const Viewdashboard = () => {
    const[dashboardItems,setDashboardItems]=useState([]);
    let navigate = useNavigate();

    const handleAddFacultyPage = ()=>{
        navigate("/addfaculty");
    }

    const directToHomeDashboard = ()=>{
        navigate("/dashboard");
    }
    
    return(
        <div className="containerViewDashboard">
            <div className="section1Dashboard">
            <div className="leftSection1">
                    <div className="imageLeftSection1">
                        <img 
                        src="https://herovired.com/wp-content/uploads/2022/05/hero-vired-logo-footer.webp"
                        style={{width:"90%",height:"85%"}}
                        alt="Image Not Found" />
                    </div>

                    <div className="dashboardLeftSection1">
                        <div className="subDashboardLeftSection1">
                        <Button variant="primary" onClick={directToHomeDashboard}>Home Dashboard</Button>
                        </div>
                        <div className="subDashboardLeftSection1">
                        <Button variant="primary" onClick={handleAddFacultyPage}>Search Faculty</Button>
                        </div>
                    </div>
                </div>

                <div className="rightsection1">
                    <div className="topHeadingRS1">
                        <h1>Faculty Dashboard</h1>
                    </div>
                    <div className="cardsRS1">
                    <Container>
                    <Row md={3} sm={2} xs={1}>

                        {/* {
                            dashboardItems.map((value, uniqueId = uuidv4())=>{
                                return(
                                    <Col key={uniqueId}>
                        {
                        ['light'].map((variant) => (
                        <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2"
                        id="cardMB-2"
                        >
                        <Card.Header>{value.heading}</Card.Header>
                        <Card.Body>
                        <Card.Title> {value.title} </Card.Title>
                            <Card.Text>
                            {value.subTitle[0]}
                            </Card.Text>
                            <Card.Text>
                            {value.subTitle[1]}
                            </Card.Text>
                        </Card.Body>
                        <Button>View Dashboard</Button>
                        </Card>
                        ))}
                        </Col>
                                )
                            })
                        } */}


                        <Col>
                        <Card id='pieChartID'>
                            <Card.Body>
                            <Card.Text>
                                Age split Data: -
                            </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top" src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg" />
                        </Card>
                        </Col>


                        <Col>
                        <Card id='pieChartID'>
                            <Card.Body>
                            <Card.Text>
                                Age split Data: -
                            </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top" src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg" />
                        </Card>
                        </Col>
                        

                        <Col>
                        <Card id='pieChartID'>
                            <Card.Body>
                            <Card.Text>
                                Age split Data: -
                            </Card.Text>
                            </Card.Body>
                            <Card.Img variant="top" src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg" />
                        </Card>
                        </Col>

                    </Row>
                    </Container>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Viewdashboard;

