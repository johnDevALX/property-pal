import React from 'react';
import {BsSearch} from "react-icons/bs";

const BelowNav = () => {
    return (
        <div>
            <div className={`flex items-center justify-evenly font-medium text-sm mt-4 ml-4`} >
                <a className={`mr-4 border-2 border-white border-b-blue-700 text-blue-700 pb-3`} >PropertyPal Research</a>
                <a className={`mr-4 pb-3`}>Data</a>
                <a className={`mr-4 pb-3`}>Visuals</a>
                <a className={`mr-4 pb-3`}>Buyers/Sellers</a>
                <a className={`mr-4 pb-3`}>Renters</a>
                <a className={`mr-4 pb-3`}>Policy/Politics</a>
                <a className={`mr-4 pb-3`}>Dashboards</a>
                <a className={`mr-4 pb-3`}>Presentations</a>
                <a className={`mr-4 pb-3`}>Market Reports</a>
                <a className={`mr-28 pb-3`} >Exclusives</a>

                <div className={`text-blue-700 mr-4 font-bold text-xl pb-3`} ><BsSearch/></div>
            </div>
        </div>
    );
};

export default BelowNav;
