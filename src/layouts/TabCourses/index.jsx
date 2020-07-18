import React, { Component } from "react";
import { Nav } from "reactstrap";
import { connect } from "react-redux";
import {
  fetchCategories,
  fetCourseOnCategory,
} from "../../store/actions/course";

import TabName from "../../components/TabName";
import CourseItem from "../../components/CourseItem";

class TabCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maDanhMuc: "TuDuy",
    };
  }
  onChangeMaDanhMuc = (maDanhMuc) => {
    this.setState({
      maDanhMuc,
    });
  };
  componentDidMount = () => {
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetCourseOnCategory(this.state.maDanhMuc, "GP01"));
  };
  componentDidUpdate = (prevProps, prevState) => {
      if(prevState.maDanhMuc !== this.state.maDanhMuc){
        prevProps.dispatch(fetCourseOnCategory(this.state.maDanhMuc, "GP01"))
      }
  }
  render() {
    return (
      <div className="container">
        <Nav tabs>
          {this.props.categories.map((tab, key) => (
            <TabName
              tab={tab}
              key={key}
              index={key}
              onChangeMaDanhMuc={this.onChangeMaDanhMuc}
            />
          ))}
        </Nav>
        <div className="row mt-4">
          {this.props.courseTab.map((course, key) => (
            <div className="col-3" key={key}>
              <CourseItem course={course} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default connect((state) => ({
  categories: state.courseList.categories,
  courseTab: state.courseList.courseTab,
}))(TabCourses);
