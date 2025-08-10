import React from "react";
import { Link } from 'react-router-dom';
import { CoursesQues } from "../assets/Courses/Courses";

const Questions = () => {
    return (
        <div className="w-screen mb-40 flex px-8 md:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 grid-flow-row-dense gap-x-2 gap-y-3 w-full">
                {CoursesQues.map((course) => (
                    <a href={course.title}>{course.icon}</a>
                ))}
            </div>
        </div>
    )
}

export default Questions;