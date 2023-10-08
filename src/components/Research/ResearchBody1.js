import React from 'react';
import r1 from '../../assets/images/research1.jpeg';

const ResearchBody1 = () => {
    return (
        <div>
            <div className={`flex mt-10 p-5`} >
                <div className={`rounded`} style={{width: "65%"}} >
                    <img src={r1} className={`rounded`} style={{height: "70%", width: "95%"}} alt={`research1`} />
                    <div className={`p-8`}>
                        <h4 className={`text-slate-400 text-xs font-bold mb-3 hover:text-blue-700`} >BUYING/SELLING</h4>
                        <h4 className={`font-bold text-3xl hover:text-blue-700`} >Fall Housing Market Outlook: Cooling Quickly</h4>
                    </div>
                </div>
                <div style={{width: "35%"}} >
                    <h4 className={`font-bold`} >The Numbers</h4>
                    <div className={`text-md`} >
                        <h4 className={`text-slate-400`} >August 2023</h4>
                        <h4 className={``} >NG Typical Home Value (PropertyPal Home Value Index)</h4>
                        <h4 className={`text-green-500 mt-3 font-bold text-3xl`} >₦20,351,423</h4>
                    </div>

                    <div className={`text-md mt-5`} >
                        <h4 className={`text-slate-400`} >August 2023</h4>
                        <h4 className={``} >Change in Typical Home Value From Last Month</h4>
                        <h4 className={`text-green-500 mt-3 font-bold text-3xl`} >0.2%</h4>
                    </div>

                    <div className={`text-md mt-5`} >
                        <h4 className={`text-slate-400`} >August 2023</h4>
                        <h4 className={``} >NG Typical Monthly Rent (PropertyPal Observed Rent Index)</h4>
                        <h4 className={`text-green-500 mt-3 font-bold text-3xl`} >₦123,423</h4>
                    </div>

                    <div className={`text-md mt-5`} >
                        <h4 className={`text-slate-400`} >August 2023</h4>
                        <h4 className={``} >Change in Typical Rent From Last Year</h4>
                        <h4 className={`text-green-500 mt-3 font-bold text-3xl`} >3.3%</h4>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ResearchBody1;
