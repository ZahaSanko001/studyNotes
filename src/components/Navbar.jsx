import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row w-screen justify-around items-center mt-8 mb-40 gap-4 md:gap-0 px-8">
                <div className="flex w-full md:w-[60%] justify-between space-x-12 items-center">
                    <a href="/" className="hidden md:block"><img src="logo.png" alt="Stamford" className="border-[1px] rounded-full w-22 h-20 p-1"/></a>
                    <div className="flex flex-col w-full text-center">
                        <h1 className="border-b-2 border-dotted text-4xl p-0.5 mb-2"><a href="/" className="hover:border-b-2">STUDY-ARCHIVE</a></h1>
                        <h2 className="">Notes and metarials by those who already finished it</h2>
                    </div>
                </div>
                
                <div className="flex items-center justify-between w-full md:w-[30%]">
                    <p>[<br />[<br />[</p>
                    <nav className="flex flex-col text-center items-center">
                        <a href="/Notes" className="hover:border-b">Notes</a>
                        <a href="" className="hover:border-b">Questions Papers</a>
                        <a href="" className="hover:border-b">Books</a>
                    </nav>
                    <p>]<br />]<br />]</p>
                </div>
            </div>
        </>
    )
}

export default Navbar;