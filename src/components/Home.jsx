import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="w-screen mb-40 flex justify-end px-16">
                <div className="w-[40%]"></div>
                <div className="w-[60%] h-fit border-l-8 pl-16">
                    <div className="flex flex-col">
                        <p className="border-l-[12px] border-r-[12px] w-fit px-4 mb-8 text-xs">Quote For the Semester</p>
                        <h2 className="w-full border-b-[1px] border-dotted pb-2">“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”</h2>
                        <h2 className="w-full border-b-[1px] border-dotted pb-2">- Richard Feynmann</h2>
                        <h2 className="pb-2">Theoretical Physicist</h2>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mb-40 space-x-8 border-y-2 border-dotted py-4">
                <Link to={''} className="border-b-2 hover:border-none">CSE</Link>
                <p>X</p>
                <Link to={''} className="border-b-2 hover:border-none">EEE</Link>
                <p>X</p>
                <Link to={''} className="border-b-2 hover:border-none">Pharmacy</Link>
            </div>


            <div className="w-screen mb-40 flex px-16">
                <div className="w-[40%]">
                    <p className="border-l-[12px] border-r-[12px] w-fit px-4 mb-8 text-xs">About the Archivist</p>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor minima velit id. Tempore molestias quas explicabo voluptatem fugit modi doloremque, blanditiis a, facilis rem nobis, reprehenderit labore fugiat. Quod.</h2>
                </div>

                <div className="w-[60%] h-fit border-l-8 pl-16">
                    <p className="border-l-[12px] border-r-[12px] w-fit px-4 mb-8 text-xs">Latest Notes Uploaded</p>
                    <ul className="">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad corrupti natus eum magni nam, debitis similique sint molestias voluptatibus? Velit consequatur natus voluptatibus cum quo sint odit blanditiis facilis!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad corrupti natus eum magni nam, debitis similique sint molestias voluptatibus? Velit consequatur natus voluptatibus cum quo sint odit blanditiis facilis!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad corrupti natus eum magni nam, debitis similique sint molestias voluptatibus? Velit consequatur natus voluptatibus cum quo sint odit blanditiis facilis!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad corrupti natus eum magni nam, debitis similique sint molestias voluptatibus? Velit consequatur natus voluptatibus cum quo sint odit blanditiis facilis!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad corrupti natus eum magni nam, debitis similique sint molestias voluptatibus? Velit consequatur natus voluptatibus cum quo sint odit blanditiis facilis!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;