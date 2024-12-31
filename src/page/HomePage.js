import React from "react";
import { Link } from "react-router-dom";
import ChartObj from "../EChart/ChartObj";

function HomePage() {
    return (
        <div>
            <ChartObj />
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
            <Link to="/ResultPage">Go to Result Page</Link>
        </div>
    );
}

export default HomePage;
