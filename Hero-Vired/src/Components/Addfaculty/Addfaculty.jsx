import React, { useState, useEffect } from 'react';
import "./addfaculty.css";
import Header from "../Header/Header";
import {
    Button,
    Dropdown
} from 'react-bootstrap';

const Addfaculty = () => {
    const[displayFacultyName,setdisplayFacultyName] = useState("");
    const[searchValue,setSearchValue] = useState("");
    let facultyData = ["Deep","Shakul Malik", "Sanjoy Paul", "Aishwarya Holkar", "Vidit Tyagi"];

    const handleFacultySearch= () => {
        for(let i=0;i<facultyData.length;i++){
            if(searchValue.localeCompare(facultyData[i]) == true){
                console.log("V")
                setdisplayFacultyName(facultyData[i]);
                return;
            }
            else{
                alert("Faculty Not Found");
                return;
            }
        }
    }

    return(
        <div className="containerAddFaculty">
            <Header data={"Add Faculty Page"}></Header>
            
            <section className='addFacultySection'>
                <div className="formAddFacultySection">
                <h2 style={{marginTop:"2rem"}}>Search Faculty Dashboard</h2>

                <form action="" className="formInsideAddFS">
                    <div className="divSearchBar">
                    <input 
                        type="text"
                        name='facultyform'
                        className='searchBar'
                        placeholder='search...'
                        value={searchValue}
                        onChange={(e)=>setSearchValue(e.target.value)}
                        />
                        <Button onClick={handleFacultySearch} variant="success">
                            Search
                        </Button>
                    </div>

                    {/* <div className="modalSearch">
                            <p>{displayFacultyName}</p>
                    </div> */}

                    <div  className="divDropdown">
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Search Faculty By
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"> Name </Dropdown.Item>
                            <Dropdown.Item href="#/action-2"> Department </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="success">
                            Add Faculty
                    </Button>
                    </div>
                    </form>
                    
                </div>
            </section>
        </div>
     );
}
 
export default Addfaculty;

