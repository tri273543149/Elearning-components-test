import React from 'react';
import CarouselCourses from "../../layouts/CarouselCourses";
import PaginationCourses from '../../layouts/PaginationCourses';
import TabCourses from '../../layouts/TabCourses';

const Home = () => {
    return (
        <div className="container-fluid">
            <CarouselCourses />
            <PaginationCourses />
            <TabCourses />
        </div>
    );
};

export default Home;