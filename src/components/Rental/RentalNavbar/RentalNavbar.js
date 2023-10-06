import React from 'react';
import {Link} from "react-router-dom";

const RentalNavbar = () => {
    return (
        <div>
            <div className={`flex justify-between items-center py-4 px-14`} >
                <div className=" text-center text-3xl font-medium text-black" >
                    <Link to={`/`}>Property<i className="text-blue-700 font-bold" >Pal</i></Link>
                </div>
                <div className={`flex justify-evenly items-center text-sm text-blue-700 pr-10 `}>
                    <Link to={`/`} className={`pr-5 hover:underline `} >Go to PropertyPal</Link>
                    <Link to={`/help`} className={`pr-5 hover:underline`} >Help</Link>
                    <Link to={`/signIn`} className={`hover:underline`} >Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default RentalNavbar;
