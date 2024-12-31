import React from "react";
import { Link } from "react-router-dom";
import BarChart from '../../EChart/BarChart';
import ChartObj from '../../EChart/ChartObj';

function ResultPage() {
    return (
        <div>
            <ChartObj/>
            <BarChart/>
            <Link to="/">Go back to Home Page</Link>
        </div>
    );
}

export default ResultPage;