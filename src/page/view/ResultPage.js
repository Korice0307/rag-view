import React from "react";
import { Link } from "react-router-dom";
import BarChart from "../../EChart/bar-chart";
import ChartObj from '../../EChart/kg-chart';
import PieChart from "../../EChart/pie-chart";

function ResultPage() {
    return (
        <div>
            <Link to="/">Go back to Home Page</Link>
            <ChartObj />
            <BarChart />
            <PieChart />
            
        </div>
    );
}

export default ResultPage;