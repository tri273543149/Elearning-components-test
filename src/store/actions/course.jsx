import { courseService } from "../services";
import { createAction } from ".";
import { FETCH_COURSES, FETCH_COURSES_PAGINATION } from "../constants/course";

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
