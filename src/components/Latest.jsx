import React, {useState} from "react";
import { Link } from 'react-router-dom';


function Latest({noteSubject}) {
    const images = import.meta.glob(`../assets/Notes/*/*.{png,jpg,jpeg,webp,svg}`, { eager: true });
    const imageList = Object.entries(images)
    .filter(([path]) => path.includes(`/${noteSubject}/`))
    .map(([, mod]) => mod.default);

    const [currentIndex, setCurrentIndex] = useState(null);

    const openImage = (index) => {
        setCurrentIndex(index);
    };

    const closeImage = () => {
        setCurrentIndex(null);
    };

    const showNext = () => {
        setCurrentIndex((prev) => (prev + 1) % imageList.length);
    };

    const showPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
    };


    return (
        <>
        {/* <Link to="/latest"> */}
            <div className="w-screen mb-40 flex px-8 md:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 grid-flow-row-dense gap-x-2 gap-y-3">
                    {imageList.map((imgSrc, idx) => (
                                <img 
                                key={idx} 
                                src={imgSrc} 
                                alt={`note-${idx}`} 
                                className="rounded-lg shadow-xl min-h-[50px]" onClick={() => openImage(idx)}/>
                    ))}
                </div>
            </div>


            {currentIndex !== null && (
                <div
                    className="fixed inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-50"
                >
                    
                    {/* Previous Button */}
                    <button
                        className="absolute h-full left-0 opacity-30 text-white text-4xl font-bold bg-transparent rounded-full hover:bg-opacity-70"
                        onClick={showPrev}
                    >
                        ‹
                    </button>

                    {/* Image */}
                    <div>
                        <p className="bg-amber-100 text-center">{currentIndex + 1}</p>
                        <img
                            src={imageList[currentIndex]}
                            alt={`Expanded ${currentIndex}`}
                            className="min-w-full min-h-full rounded-lg shadow-2xl"
                        />
                    </div>
                    

                    {/* Next Button */}
                    <button
                        className="absolute h-full right-0 opacity-30 text-white text-4xl font-bold bg-transparent rounded-full hover:bg-opacity-70"
                        onClick={showNext}
                    >
                        ›
                    </button>

                    {/* Close Button */}
                    <button
                        className="absolute h-fit w-fit top-5 right-5 text-white text-3xl font-bold"
                        onClick={closeImage}
                    >
                        ×
                    </button>
                    
                </div>
                )}
        {/* </Link> */}
        </>
    )
}

export default Latest;