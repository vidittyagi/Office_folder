import React, { useState, useEffect } from 'react';
import "./addfaculty.css";
import Header from "../Header/Header";
import {
    Button,
    Dropdown
} from 'react-bootstrap';

const Addfaculty = () => {
    return ( 
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
                        />
                        <Button variant="success" >
                            Search
                        </Button>
                    </div>
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

