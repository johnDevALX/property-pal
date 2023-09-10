import React, {useState} from 'react';
import './AppNavbar.css'
import BuyDropdown from "./BuyDropdown/BuyDropdown";
import RentDropdown from "./RentDropdown/RentDropdown";
import SellDropdown from "./SellDropdown/SellDropdown";

const AppNavbar = () => {
    const [buyDropdown, setBuyDropdown] = useState(false);
    const [rentDropdown, setRentDropdown] = useState(false);
    const [sellDropdown, setSellDropdown] = useState(false);
    function onBuyHover(){
        setBuyDropdown(!buyDropdown);
        setSellDropdown(false)
        setRentDropdown(false)
    }
    function onRentHover(){
        setRentDropdown(!rentDropdown);
        setBuyDropdown(false)
        setSellDropdown(false)
    }
    function onSellHover(){
        setSellDropdown(!sellDropdown);
        setBuyDropdown(false)
        setRentDropdown(false)
    }

    function onCloseHover(){
        setBuyDropdown(false)
        setRentDropdown(false)
        setSellDropdown(false)
    }

    return (
        <div>
            <div className=" text-white flex justify-center py-6"  >
                <div className="nav-list flex justify-evenly font-medium text-black" >
                    <a className="buy hover:underline " href="#" onMouseOver={onBuyHover} >Buy</a>
                    <a href="#" className="buy hover:underline" onMouseOver={onRentHover} >Rent</a>
                    <a href="#" className="buy hover:underline" onMouseOver={onSellHover} >Sell</a>
                    <a href="#" onMouseOver={onCloseHover} >Home Loans</a>
                    <a href="#" onMouseOver={onCloseHover} >Agent Finder</a>

                </div>

                <div className="logo text-center text-3xl font-medium text-black" >
                    <p>Property<i className="text-blue-700 font-bold" >Pal</i></p>
                </div>
                <div className="nav-list flex justify-evenly font-medium text-black " >
                    <a href="#" >Manage Rentals</a>
                    <a href="#" >Advertise</a>
                    <a href="#" >Help</a>
                    <a href="#" >Sign in</a>
                </div>
            </div>
            <div>
                <div >{buyDropdown ? <BuyDropdown/> : null}</div>
                <div >{rentDropdown ? <RentDropdown/> : null}</div>
                <div >{sellDropdown ? <SellDropdown/> : null}</div>

            </div>
        </div>
    );
};

export default AppNavbar;
