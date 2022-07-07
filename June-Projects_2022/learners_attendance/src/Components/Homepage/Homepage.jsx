import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import {Table, Button} from 'react-bootstrap';
import "./homepage.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Homepage = () => {
    //thead = Column Count
    const[theads,setTheads] = useState([]);
    const[rowCount,setRowCount] = useState([]);
    const[changeTableData,setChangeTableData] = useState(false);
    const[inputValue,setInputValue] = useState("");
    const[rowNumber,setRowNumber] = useState(0);
    const[columnNumber,setColumnNumber] = useState(0);
    const[changedValue,setChangedValue] = useState("");

    useEffect(()=>{
        let columns = ["Month","Date","Name"];
        setTheads(columns);
        let array = [
            ["Table cell  0","Table cell 1","Table cell 2"],
            ["Table cell  1","Table cell 2","Table cell 2"],
        ];
        // let response = await fetch('http://localhost:3000/tablechangedata');
        // let data = await response.json();
        setRowCount(array);
    },[]);

    const handleAddRowClick=()=>{
        setRowCount(rowCount+1);
    }

    const handleChangedData = async(e)=>{
        // let userObj={
        //     username : username,
        //     password : pass,
        //     mob: mobile,
        //     email:email
        //   }
    
        // let response = await fetch('http://localhost:3000/signup',{
        //     method:"POST",
        //     headers:{"content-type": "application/json"},
        //     body:JSON.stringify(userObj)
        // });
        // let data = await response.text();
        // console.log(data);
        // if(data == 'true'){
        //   navigate("/homepage");
        // }
        // else alert("Server Error");
        // } 
        // catch (error) {
        //   console.log(error);
        // }
        e.preventDefault();
        // console.log(changedValue);
        let i = rowNumber-1;//ith row
        let j = columnNumber-1;//jth column
        let val = changedValue;
        let rowDataArray = rowCount[i];
        rowDataArray[j] = val;
        try {
            let dataObj = {
                rowCount:rowCount,
                theads:theads
            }
            let response = await fetch('http://localhost:3000/tablechangedata',{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(dataObj)
            });
            let data = await response.text();
            console.log(data);
        } catch(error){
            console.log("Error");
        }
        setRowCount(rowCount);
        setChangeTableData(false);
    }
   
    return(
        <div className='containerHomepage'>
            <Header data={"Home Page"}></Header>
            <section className='section1Homepage'>
            <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                        <th>ID</th>
                        {theads.map((columnValue)=>(
                            <th>{columnValue}</th>
                        ))}
                        </tr>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {rowCount.map((ele,index)=>{
                            return(
                                <>
                                <tr>
                                <td>{index+1}</td>
                                {ele.map((val, index) => (
                                    <td key={index}>
                                        {val}
                                        </td>
                                ))}
                                </tr>
                                </>
                        );
                        })
                        }                        
                    </tbody>
            </Table>
            {
            (changeTableData)?
            (
                <div className="changeTableDataDiv">
                {/* <input 
                type="text"
                value={inputValue}
                onChange={(e)=>{setInputValue(e.target.value)}}
                />
                <button onClick={(e)=>{handleChangedData(e)}}>change</button> */}
                <form className="form">
                <label>Row Number</label>
                <input 
                type="text"
                placeholder="Enter Row Number"
                value={rowNumber}
                onChange={(e)=>{setRowNumber(e.target.value)}}
                />
                <label>Column Number</label>
                <input 
                type="text"
                placeholder="Enter Column Number"
                value={columnNumber}
                onChange={(e)=>{setColumnNumber(e.target.value)}}
                />
                <label>Changed Value</label>
                <input 
                type="text"
                placeholder="Enter Changed Value"
                value={changedValue}
                onChange={(e)=>{setChangedValue(e.target.value)}}
                />
                <button onClick={(e)=>{handleChangedData(e)}}>Submit</button>
                </form>
                </div>
            )
            :
            (
                <button onClick={()=>{setChangeTableData(true)}}>Edit the Table</button>
            )
        }
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