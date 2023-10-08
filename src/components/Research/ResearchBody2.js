import React from 'react';
import rs1 from '../../assets/images/research2.png';
import rs2 from '../../assets/images/shutterstock_187920503-ea5f3c.jpg';
import rs3 from '../../assets/images/research4.jpeg';

const ResearchBody2 = () => {
    return (
        <div className={``} >
            <div className={` flex justify-between py-4 px-10 font-bold`} >
                <h4 className={`text-3xl`} >The Latest</h4>
            </div>

            <div className={`flex py-4 px-6`} >
                <div className={`grid border mr-2 rounded-lg `} style={{width: "45%"}} >
                    <img src={rs1} className={`rounded-lg`} alt={`blog1`} style={{width: "100%"}} />
                    <div className={`text-xl mt-6 px-4`} >
                        <h4 className={`text-slate-400 text-xs font-bold mb-3 hover:text-blue-700`} >MARKET REPORTS</h4>
                        <h4 className={`my-6 font-bold `}>Rents Are Just Barely Climbing (September 2023 Rent Report)</h4>
                    </div>
                </div>

                <div className={`grid border mr-2 rounded-lg `} style={{width: "45%"}} >
                    <img src={rs2} className={`rounded-lg`} alt={`blog1`} style={{width: "100%"}} />
                    <div className={`text-xl mt-6 px-4`} >
                        <div className={`flex `} >
                            <h4 className={`text-slate-400 text-xs font-bold mb-3 hover:text-blue-700`} >BUYING/SELLING, </h4>
                            <p className={` ml-1 text-slate-400 text-xs font-bold mb-3 hover:text-blue-700`} > NEWS</p>
                        </div>
                        <h4 className={`my-6 font-bold`} >Mortgage Rates Mark 22-Year High On Surprising Economic Resilience</h4>
                    </div>
                </div>

                <div className={`grid border mr-2 rounded-lg `} style={{width: "45%"}} >
                    <img src={rs3} className={`rounded-lg`} alt={`blog1`} style={{width: "100%"}} />
                    <div className={`text-xl mt-6 px-4`} >
                        <h4 className={`text-slate-400 text-xs font-bold mb-3 hover:text-blue-700`} >BUYING/SELLING</h4>
                        <h4 className={`my-6 font-bold`} >Metric Spotlight: More Price Cuts, Fewer Bidding Wars as Seasonal Cooldown Settles In</h4>
                    </div>
                </div>
            </div>
            <div className={`text-center mt-4 mb-10`} >
                <button className={`bg-blue-700 text-white hover:bg-blue-800 font-bold text-sm py-4 px-9 rounded-md`} >Read more</button>
            </div>
        </div>
    );
};

export default ResearchBody2;
