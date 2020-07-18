import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import CourseItem from "../../components/CourseItem";
import PaginationComponent from "../../components/Pagination";
import { fetchCoursesPagination } from "../../store/actions/course";

class PaginationCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 4,
    };
  }
  onChangePage = (page) => {
    this.setState(
      {
        page,
      },
      () => {
        console.log(this.state.page);
      }
    );
  };
  componentDidMount = () => {
    let { page, pageSize } = this.state;
    this.props.dispatch(fetchCoursesPagination(page, pageSize, "GP01"));
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
      prevProps.dispatch(
        fetchCoursesPagination(this.state.page, this.state.pageSize, "GP01")
      );
    }
  };
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          {this.props.coursePagination.map((course, key) => (
            <div className="col-3" key={key}>
              <CourseItem course={course} />
            </div>
          ))}
        </div>
        <div className="row my-3">
          <div className="col-12">
            <div className="mx-auto" style={{width: "140px"}}>
              <PaginationComponent
                onChangePage={this.onChangePage}
                totalPages={this.props.totalPages}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  coursePagination: state.courseList.coursePagination.items || [],
  totalPages: state.courseList.coursePagination.totalPages
}))(PaginationCourses);
