import React, { Component } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.less";
import "./index.css";
import { connect } from "react-redux";
import { fetchCourse } from "../../store/actions/course";

import CarouselCourseItem from "../../components/CarouselCourseItem";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class CarouselCourses extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchCourse());
  };
  render() {
    return (
      <div className="container py-5 carousel_courses">
        <Swiper
          autoplay={true}
          loop={true}
          spaceBetween={20}
          slidesPerView={5}
          pagination={{ clickable: true }}
        >
          {this.props.courses.map((course, key) => (
            <SwiperSlide key={key}>
              <CarouselCourseItem course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
export default connect((state) => ({
  courses: state.courseList.courses,
}))(CarouselCourses);
