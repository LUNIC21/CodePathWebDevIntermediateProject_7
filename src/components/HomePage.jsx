import { Route, Routes, Link } from "react-router-dom";
import './HomePage.css';
import amongUsMainPage from '../assets/among-us-main-page.jpg';

const HomePage = () =>{

    return(
        <div>
            <h1>Welcome to the Crewmate Creator!</h1>
            <p>Create your own creewmates!</p>
            <img className="main-imgage" src={amongUsMainPage} alt="Among Us Logo"></img>
        </div>
    )
}

export default HomePage;