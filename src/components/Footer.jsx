import React from "react";

const Footer = () => {
    return (
        <div className="md:w-[40%] flex flex-col mb-20 md:mb-40 px-8 md:px-16">
            <p className="border-l-[12px] border-r-[12px] w-fit px-4 mb-8 text-xs">The Archivist</p>
            <h2>Contributions from the wonderfull students of 81.</h2>
            <h2>Created by <a href="https://raiyankarim.vercel.app" className="border-b-2">Raiyan Karim.</a></h2>
        </div>
    )
}

export default Footer;