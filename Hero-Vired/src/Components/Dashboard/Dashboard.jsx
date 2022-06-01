import React, { useState, useEffect } from 'react';
import{
    Card, 
    Button,
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';


// import fontawesome from '@fortawesome/fontawesome-free';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/fontawesome-free-solid';
// const styles = {
//         fontFamily: 'sans-serif',
//         textAlign: 'center',
//       };
//     fontawesome.library.add(faPlus);


const Dashboard = () => {
    //home Dashboard for maintaining number of dashboard data 
    const[homeDashboard,setHomeDashboard] = useState([]);
    const[addDashboardFormToggle,setAddDashboardFormToggle] = useState(false);
    const[dashboardName,setDashboardName] = useState("");
    const[dashboardTitle,setDashboardTitle] = useState("");
    let uniqueId = 0;
    let navigate = useNavigate();

    const handleViewDashboard =()=>{
        navigate("/viewdashboard");
    }

    const handleDashboardAddition = ()=>{
        if(dashboardName == "") {
            alert("Please enter Dashboard Name");
            return;
        }

        let obj = {
            heading:dashboardName,
            title:dashboardTitle,
            subTitle:["Age Split", "Gender Split"]
        }

        homeDashboard.push(obj);
        setDashboardName("");
        setDashboardTitle("");
        setAddDashboardFormToggle(false);
    }

    const directToHomeDashboard = ()=>{
        navigate("/dashboard");
    }
    
    
    return ( 
        <div className="containerDashboard">
            <section className='section1Dashboard'>

                <div className="leftSection1">
                    <div className="imageLeftSection1">
                        <img 
                        src="https://herovired.com/wp-content/uploads/2022/05/hero-vired-logo-footer.webp"
                        style={{width:"90%",height:"85%"}}
                        alt="Image Not Found" />
                    </div>

                    <div className="dashboardLeftSection1">
                        {/* use map after dynamic implementation */}
                        <div className="subDashboardLeftSection1">
                        <Button variant="primary" onClick={directToHomeDashboard}>Home Dashboard</Button>
                        </div>
                    </div>
                </div>


                <div className="rightsection1">
                    <div className="topHeadingRS1">
                        <h1>Home Dashboard</h1>
                    </div>
                    <div className="cardsRS1">
                    <Container>
                    <Row>
                        {
                        //     homeDashboard.map((value, uniqueId = uuidv4())=>{
                        //         return(
                        //             <Col key={uniqueId}>
                        // {
                        // ['light'].map((variant) => (
                        // <Card
                        // bg={variant.toLowerCase()}
                        // key={variant}
                        // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        // style={{ width: '18rem' }}
                        // className="mb-2"
                        // id="cardMB-2"
                        // >
                        // <Card.Header>{value.heading}</Card.Header>
                        // <Card.Body>
                        // <Card.Title> {value.title} </Card.Title>
                        //     <Card.Text>
                        //     {value.subTitle[0]}
                        //     </Card.Text>
                        //     <Card.Text>
                        //     {value.subTitle[1]}
                        //     </Card.Text>
                        // </Card.Body>
                        // <Button onClick={handleViewDashboard}>View Dashboard</Button>
                        // </Card>
                        // ))}
                        // </Col>
                        //         )
                        //     })
                        }

                        {/* <Col> */}
                        {
                        // ['light',].map((variant) => (
                        // <Card
                        // bg={variant.toLowerCase()}
                        // key={variant}
                        // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        // style={{ width: '18rem' }}
                        // className="mb-2"
                        // id="cardMB-2"
                        // >
                        // <Card.Header>Add Dashboard</Card.Header>
                        // <Card.Body>
                        // <Card.Title>
                        // <Button variant="success" onClick={()=>{setAddDashboardFormToggle(true)}}>Add Dashboard</Button>{' '}
                        // </Card.Title>
                        //     {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}
                        // </Card.Body>
                        // </Card>
                        // ))
                        }
                        {/* </Col> */}



                        <Col>
                        {
                        ['primary'].map((variant) => (
                        <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2"
                        id="cardMB-2"
                        >
                        <Card.Header>Faculty Dashboard</Card.Header>
                        <Card.Body>
                        <Card.Title> Domain Wise Analysis </Card.Title>
                            <Card.Text>
                            - Age Split
                            </Card.Text>
                            <Card.Text>
                            - Gender Split
                            </Card.Text>
                            <Card.Text>
                            - City Count
                            </Card.Text>
                        </Card.Body>
                        <Button onClick={handleViewDashboard}>View Dashboard</Button>
                        </Card>
                        ))}
                        </Col>

                        <Col>
                        {
                        ['primary'].map((variant) => (
                        <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2"
                        id="cardMB-2"
                        >
                        <Card.Header>Learner Dashboard</Card.Header>
                        <Card.Body>
                        <Card.Title> Amount Paid </Card.Title>
                            <Card.Text>
                            - Scholarship %
                            </Card.Text>
                            <Card.Text>
                            - Loan Details (If any)
                            </Card.Text>
                            <Card.Text>
                            - Emi details (if any)
                            </Card.Text>
                        </Card.Body>
                        <Button onClick={handleViewDashboard}>View Dashboard</Button>
                        </Card>
                        ))}
                        </Col>



                        <Col>
                        {
                        ['primary'].map((variant) => (
                        <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2"
                        id="cardMB-2"
                        >
                        <Card.Header>Delivery Dashboard</Card.Header>
                        <Card.Body>
                        <Card.Title> Domain Wise Analysis </Card.Title>
                            <Card.Text>
                            - Age Split
                            </Card.Text>
                            <Card.Text>
                            - Gender Split
                            </Card.Text>
                            <Card.Text>
                            - City Count
                            </Card.Text>
                        </Card.Body>
                        <Button onClick={handleViewDashboard}>View Dashboard</Button>
                        </Card>
                        ))}
                        </Col>
                        
                    </Row>
                    </Container>
                    </div>
                </div>

                {
                    (addDashboardFormToggle) ?
                    (
                    <div className="addDashBoardModal">
                    <div className="cancelFormAddDashboard">
                        <Button variant="secondary" onClick={()=>{setAddDashboardFormToggle(false)}}>close</Button>
                    </div>
                    <form action="" className='formAddDashboard'>
                    <h2>Add Dashboard Form</h2>
                        <label className='labelAddDashboardForm' htmlFor="DashboardName">Dashboard Name</label>
                        <input type="text" 
                        name="dashboardname" 
                        className="dashboardFormNameTitle"
                        value={dashboardName}
                        onChange={(e)=>{setDashboardName(e.target.value)}}
                        />
                        <label className='labelAddDashboardForm' htmlFor="DashboardTitle">Dashboard Title</label>
                        <input type="text" 
                        name="dashboardtitle"
                        className="dashboardFormNameTitle"
                        value={dashboardTitle}
                        onChange={(e)=>{setDashboardTitle(e.target.value)}}
                        />
                        <Button variant="primary" onClick={handleDashboardAddition}>Add Dashboard</Button>{' '}
                    </form>
                    </div>
                    )
                    :
                    (
                        <></>
                    )
                }
                


            </section>
        </div>
     );
}
 
export default Dashboard;

