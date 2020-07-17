import React, { Component } from "react";
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
    this.setState({
      page
    });
  };
  componentDidMount = () => {
    let { page, pageSize } = this.state;
    this.props.dispatch(fetchCoursesPagination(page, pageSize, "GP01"));
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
        <div className="my-3">
          <PaginationComponent onChangePage={this.onChangePage} pageSize={this.state.pageSize} />
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  coursePagination: state.courseList.coursePagination.items || [],
}))(PaginationCourses);
