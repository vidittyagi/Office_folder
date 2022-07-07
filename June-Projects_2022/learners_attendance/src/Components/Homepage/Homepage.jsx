import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import {Table, Button} from 'react-bootstrap';
import "./homepage.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Homepage = () => {
    const[theads,setTheads] = useState([]);
    const[rowCount,setRowCount] = useState(0);

    useEffect(()=>{
        let columns = ["Month","Date","Name"];
        setTheads(columns);
        setRowCount(2);
    },[]);

    const handleAddRowClick= ()=>{
        setRowCount(rowCount+1);
    }
   
    return(
        <div className='containerHomepage'>
            <Header data={"Home Page"}></Header>
            <section className='section1Homepage'>
            <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                        <th>ID</th>
                        {theads.map((columnValue) => (
                            <th>{columnValue}</th>
                        ))}
                        </tr>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({length: rowCount }).map((_,index)=>{
                            return(
                                <>
                                <tr>
                                <td>{index+1}</td>
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                                </tr>
                                </>
                        );
                        })
                        }                        
                    </tbody>
            </Table>
            <div className='addDiv'>
                        <Button onClick={handleAddRowClick}>
                                Add Row <AddCircleIcon/>
                        </Button>
            </div>
            </section>
        </div>
     );
}

export default Homepage;