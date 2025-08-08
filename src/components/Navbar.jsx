import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="flex w-screen justify-around mt-8 mb-40 px-8">
                <div className="flex w-[60%] justify-between space-x-12 items-center">
                    <a href=""><img src="logo.png" alt="Stamford" className="border-[1px] rounded-full w-22 h-20 p-1"/></a>
                    <div className="flex flex-col w-full text-center">
                        <h1 className="border-b-2 border-dotted text-4xl p-0.5 mb-2"><a href="/" className="hover:border-b-2">The Archivist</a></h1>
                        <h2 className="font-bold">Letters That Changed the World</h2>
                    </div>
                </div>
                
                <div className="flex justify-between w-[30%]">
                    <p>[<br />[<br />[</p>
                    <nav className="flex flex-col items-center">
                        <a href="" className="hover:border-b">The Collection</a>
                        <a href="" className="hover:border-b">Browse By Department</a>
                        <a href="" className="hover:border-b">By Courses</a>
                    </nav>
                    <p>]<br />]<br />]</p>
                </div>
            </div>
        </>
    )
}

export default Navbar;