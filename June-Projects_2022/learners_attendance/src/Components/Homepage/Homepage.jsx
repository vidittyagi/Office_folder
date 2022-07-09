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
    const[rowNumber,setRowNumber] = useState("");
    const[columnNumber,setColumnNumber] = useState("");
    const[changedValue,setChangedValue] = useState("");

    useEffect(()=>{
        async function getData(){
        let columns = ["Month","Date","Name"];
        try{
        let response = await fetch('http://localhost:3000/gettablechangedata');
        let data = await response.json();
        // console.log(data);
        // console.log(data[data.length-1].rowCount);
        // console.log(data[data.length-1].theads);
        let newrowCount = data[data.length-1].rowCount;
        let newtheads = data[data.length-1].theads;

        let arr = [];
        for(let i=0;i<newrowCount.length;i++){
            let arr1 = [];
            for(let j=0;j<newtheads.length;j++){
                // console.log(data[data.length-1].rowCount[i][j]);
                if(newrowCount[i][j] === '') arr1[j] = "";
                else arr1[j] = newrowCount[i][j];
            }
            arr.push(arr1);
        }

        console.log(arr);
        setTheads(data[data.length-1].theads);
        setRowCount(arr);
        } catch (error){
            console.log(error);
        }
        }
        getData();
    },[]);

    const handleAddRowClick=async()=>{
        let arr = [];
        for(let i=0;i<theads.length;i++){
            arr[i] = "";
        }
        rowCount.push(arr);
        setRowCount(rowCount);
        // console.log(rowCount);
        let obj = {
         rowCount:rowCount,
         theads:theads
        }
        try{
            let response = await fetch('http://localhost:3000/tablechangedata',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(obj)
        });
        let data = await response.text();
        console.log(data);
        alert("Row Added");
        }
        catch (error){
            alert(error);
        }
    }

    const handleChangedData = async(e)=>{
        e.preventDefault();
        // console.log(changedValue);
        let i = parseInt(rowNumber) - 2;//ith row
        let j = parseInt(columnNumber) - 2;//jth column
        let val = changedValue;
        if(i>=0 && j>=0 && i<rowCount.length && j<theads.length){
            let rowDataArray = rowCount[i];
            rowDataArray[j] = val;
        }
        else{
            alert("Please enter valid row and column id");
            return;
        }
        
        try{
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
            // console.log(data); response True
        } catch(error){
            console.log("Error");
        }
        setRowCount(rowCount);
        setChangeTableData(false);
    }

    const handleAddColumnClick = async()=>{
        let colVal = prompt("Enter column Value");
        // console.log(colVal);
        theads.push(colVal);
        // setTheads(theads);
        // let arr = [];
        // for(let i=0;i<theads.length;i++){
        //     arr[i] = "Enter a value";
        // }
        // rowCount.push(arr);

        let obj = {
            rowCount:rowCount,
            theads:theads
           }
           try{
               let response = await fetch('http://localhost:3000/tablechangedata',{
               method:"POST",
               headers:{"content-type":"application/json"},
               body:JSON.stringify(obj)
           });
           let data = await response.text();
           console.log(data);
           alert("Column Added");
           }
           catch (error){
               alert(error);
           }
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
                <Button variant='success' onClick={()=>{setChangeTableData(true)}}>
                            Edit the Table
                    </Button>
            )
        }
            <div className='addDiv'>
                    <Button onClick={handleAddRowClick}>
                            Add Row <AddCircleIcon/>
                    </Button>
            </div>
            <div className='addDiv'>
                    <Button onClick={handleAddColumnClick}>
                            Add Column <AddCircleIcon/>
                    </Button>
            </div>
            </section>
        </div>
     );
}

export default Homepage;