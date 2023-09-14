import React from 'react';

const RentalNavbar = () => {
    return (
        <div>
            <div className={`flex justify-between items-center py-4 px-14`} >
                <div className=" text-center text-3xl font-medium text-black" >
                    <p>Property<i className="text-blue-700 font-bold" >Pal</i></p>
                </div>
                <div className={`flex justify-evenly items-center text-sm text-blue-700 pr-10 `}>
                    <a href={`#`} className={`pr-5 hover:underline `} >Go to PropertyPal</a>
                    <a href={`#`} className={`pr-5 hover:underline`} >Help</a>
                    <a href={`#`} className={`hover:underline`} >Sign in</a>
                </div>
            </div>
        </div>
    );
};

export default RentalNavbar;
