import React from 'react';
import CarouselCourses from "../../layouts/CarouselCourses";
import PaginationCourses from '../../layouts/PaginationCourses';

const Home = () => {
    return (
        <div className="container-fluid">
            <CarouselCourses />
            <PaginationCourses />
        </div>
    );
};

export default Home;