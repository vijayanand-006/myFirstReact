import React from "react";
import Single from "../assets/Single.png"
import Double from "../assets/Double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
    return(
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="mx-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-10 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Single} alt="Single" />
                    <h2 className="text-2xl font-bold text-center py-8" >Single User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black hover:bg-[#00a290]">Start Trial</button>
                </div> 
                <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-10 rounded-lg hover:scale-105 duration-300">
                    <img img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="Double" />
                    <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
                    <p className="text-center text-4xl font-bold">$399</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
                        <p className="py-2 border-b mx-8">2 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 4 GB</p>
                    </div>
                    <button className="text-[#00df9a] w-[200px] rounded-md font-medium mx-auto  my-6 px-6 py-3 bg-black" >Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-10 rounded-lg hover:scale-105 duration-300">
                    <img img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Triple} alt="Triple" />
                    <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
                    <p className="text-center text-4xl font-bold">$699</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">2 TB Storage</p>
                        <p className="py-2 border-b mx-8">3 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 10 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto  my-6 px-6 py-3 text-black hover:bg-[#00a290] ">Start Trial</button>
                </div>
            </div>
        </div>
    );
}

export default Cards