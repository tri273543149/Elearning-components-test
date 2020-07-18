import { courseService } from "../services";
import { createAction } from ".";
import {
  FETCH_COURSES,
  FETCH_COURSES_PAGINATION,
  FETCH_CATEGORIES,
  FET__COURSE_CATEGORY,
} from "../constants/course";

export const fetchCourse = () => {
  return (dispatch) => {
    courseService
      .fetchCourses()
      .then((res) => {
        dispatch(createAction(FETCH_COURSES, res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const fetchCoursesPagination = (page, pageSize, maNhom) => {
  return (dispatch) => {
    courseService
      .fetchCoursePagination(page, pageSize, maNhom)
      .then((res) => {
        dispatch(createAction(FETCH_COURSES_PAGINATION, res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    courseService
      .fetchCategories()
      .then((res) => {
        dispatch(createAction(FETCH_CATEGORIES, res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const fetCourseOnCategory = (maDanhMuc, maNhom) => {
  return (dispatch) => {
    courseService
      .fetchCoursesOnCategory(maDanhMuc, maNhom)
      .then((res) => {
        dispatch(createAction(FET__COURSE_CATEGORY, res.data));
      })
      .catch((err) => console.log(err));
  };
};
