import {
  FETCH_COURSES,
  FETCH_COURSES_PAGINATION,
  FETCH_CATEGORIES,
  FET__COURSE_CATEGORY
} from "../constants/course";

let initialState = {
  courses: [],
  coursePagination: [],
  categories: [],
  courseTab: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      state.courses = action.payload;
      return { ...state };
    case FETCH_COURSES_PAGINATION:
      state.coursePagination = action.payload;
      return { ...state };
    case FETCH_CATEGORIES:
      state.categories = action.payload;
      return { ...state };
    case FET__COURSE_CATEGORY:
      state.courseTab = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default courseReducer;
