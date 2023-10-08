import React from 'react';
import AppNavbar from "../AppNavbar/AppNavbar";
import BelowNav from "./BelowNav";
import ResearchBody1 from "./ResearchBody1";
import ResearchBody2 from "./ResearchBody2";
import ResearchBody3 from "./ResearchBody3";
import AppUpperFooter from "../Home/AppUpperFooter/AppUpperFooter";
import AppLowerFooter from "../Home/AppLowerFooter/AppLowerFooter";

const Research = () => {
    return (
        <div>
            <AppNavbar/>
            <hr/>
            <BelowNav/>
            <hr/>
            <ResearchBody1/>
            <ResearchBody2/>
            <ResearchBody3/>
            <AppUpperFooter/>
            <AppLowerFooter/>
        </div>
    );
};

export default Research;
