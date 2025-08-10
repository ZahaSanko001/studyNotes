import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="w-screen mb-40 flex justify-end px-8 md:px-16">
                <div className="hidden md:w-[40%]"></div>
                <div className="md:w-[60%] h-fit border-l-8 pl-8">
                    <div className="flex flex-col">
                        <p className="border-l-[12px] border-r-[12px] w-fit px-4 mb-8 text-xs">Quote For the Semester</p>
                        <h2 className="w-full border-b-[1px] border-dotted pb-2">“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”</h2>
                        <h2 className="w-full border-b-[1px] border-dotted pb-2">- Richard Feynmann</h2>
                        <h2 className="pb-2">Theoretical Physicist</h2>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mb-40 space-x-8 border-y-2 border-dotted py-4">
                <Link to={'/Notes'} className="border-b-2 hover:border-none">CSE</Link>
                {/* <p>X</p>
                <Link to={''} className="border-b-2 hover:border-none"></Link>
                <p>X</p>
                <Link to={''} className="border-b-2 hover:border-none"></Link> */}
            </div>


            <div className="w-screen mb-40 flex flex-col md:flex-row gap-8 md:gap-0 px-8 md:px-16">
                <div className="md:w-[40%]">
                    <p className=" border-x-[12px] w-fit px-4 mb-8 text-xs">About the Archive</p>
                    <h2 className="w-[80%]">This archive is an idea of a few students from 81. It's a collection where later or newer batches can find materials that can help them study on their own pace.</h2>
                </div>

                <div className="md:w-[60%] h-fit border-l-8 pl-8">
                    <p className="border-l-[12px] border-r-[12px] w-fit px-4 mb-8 text-xs">Latest Notes Uploaded</p>
                    <ul>
                        <li className="border-b-[1px] pb-2"></li>
                        <li className="border-b-[1px] pb-2"></li>
                        <li className="border-b-[1px] pb-2"></li>
                        <li className="border-b-[1px] pb-2"></li>
                        <li className="border-b-[1px] pb-2"></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;