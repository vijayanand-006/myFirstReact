import React from "react"
import Laptop from '../assets/laptop.png'

const Analytics = () => {
    return(
        <div className = 'w-full bg-white py-16 px-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
                <div className="flex flex-col justify-center">
                    <p className="uppercase text-[#00df9a] font-bold">Data Analytics Dashboard</p>
                    <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">Manage Data Analytics Centrally</h1>
                    <p>
                        What is the meaning of it defines a paragraph of text. 
                        The end of the paragraph is marked by a closing tag. 
                        Technically this is optional, but 
                        it's good practice to include the closing tag to ensure your document validates.
                    </p>
                    <button className="text-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 py-3 bg-black ">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Analytics