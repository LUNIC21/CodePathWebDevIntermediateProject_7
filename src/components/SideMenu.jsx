import '../App.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const SideMenu = () =>{

    return(
        <div className='side-bar'>
            <Link to="/"><button className="headerBtn">Home</button></Link>
            <Link to="/createCrew"><button className="headerBtn">Create Crew</button></Link>
            <Link to="/crewList"><button className='headerBtn'>Crew List</button></Link>
        </div>
    )
}

export default SideMenu;