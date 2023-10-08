import React from 'react';
import {Link} from "react-router-dom";

const ResearchBody3 = () => {
    const bgColor = "#eaebec"
    return (
        <div className={`my-3`} >
            <div className={`flex p-8 `}  >
                <div className={`mr-7`} >
                    <div>
                        <h4 className={`pb-5 font-bold text-lg w-60 border-2 border-white border-b-yellow-300`} >FEATURED</h4>
                    </div>
                    <div className={`py-5`} >
                        <h4 className={`mb-3`} ><Link to={``} className={` hover:text-blue-700 hover:underline cursor-pointer `} >Rents Are Just Barely Climbing (September 2023 Rent Report)</Link></h4>
                        <h2 className={`mb-3`}><Link to={``} className={` hover:text-blue-700 hover:underline cursor-pointer `}  >Mortgage Rates Mark 22-Year High On Surprising Economic Resilience</Link></h2>
                        <h2 className={`mb-3`}><Link to={``} className={` hover:text-blue-700 hover:underline cursor-pointer `}  > Metric Spotlight: More Price Cuts, Fewer Bidding Wars as Seasonal Cooldown Settles In </Link> </h2>
                        <h2 className={`mb-3`}><Link to={``} className={` hover:text-blue-700 hover:underline cursor-pointer `}  > Below Expected Core Inflation In August Holds Back Rapid Rise in Yields, Mortgage Rates</Link></h2>
                        <h2 className={`mb-3`}><Link to={``} className={` hover:text-blue-700 hover:underline cursor-pointer `} > Fall Housing Market Outlook: Cooling Quickly</Link></h2>
                    </div>
                </div>

                <div>
                    <div>
                        <h4 className={`pb-5 w-60 font-bold text-lg border-2 border-white border-b-yellow-300`} >RECENT</h4>
                    </div>
                    <div className={`py-5`} >
                        <h2 className={`mb-3`}><Link to={``} className={` hover:text-blue-700 hover:underline cursor-pointer `}  >Federal Government Shutdown May Leave Thousands of Home Buyers in Limbo</Link></h2>
                        <h2 className={`mb-3`}><Link to={``} className={` hover:text-blue-700 hover:underline cursor-pointer `}  >Mortgage rates — at their highest level in more than two decades — rise again</Link></h2>
                        <h2 className={`mb-3`}><Link to={``} className={` hover:text-blue-700 hover:underline cursor-pointer `}  >August 2023 New Home Sales: New Sales Still Strong Compared to a Year Ago</Link></h2>
                        <h2 className={`mb-3`}><Link to={``} className={` hover:text-blue-700 hover:underline cursor-pointer `}  >The Value of Residential Real Estate Broke a New Record $52 Trillion</Link></h2>
                        <h2 className={`mb-3`}><Link to={``} className={` hover:text-blue-700 hover:underline cursor-pointer `}  >August Existing Home Sales: Home Sale Slide Continues</Link></h2>
                    </div>
                </div>
            </div>
            <div className={`text-center mt-6 mb-10`} >
                <button className={`text-black font-bold text-sm py-4 px-9 rounded-md bg-gray-200 hover:bg-gray-400 `}  >Read more</button>
            </div>
        </div>
    );
};

export default ResearchBody3;
