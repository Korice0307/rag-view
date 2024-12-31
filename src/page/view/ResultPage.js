import React from "react";
import { Link } from "react-router-dom";
import BarChart from "../../EChart/barChart";
import ChartObj from '../../EChart/ChartObj';
import PieChart from "../../EChart/PieChart";

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