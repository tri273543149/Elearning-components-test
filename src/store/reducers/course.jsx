import { FETCH_COURSES, FETCH_COURSES_PAGINATION } from "../constants/course";

let initialState = {
  courses: [],
  coursePagination: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      state.courses = action.payload;
      return { ...state };
    case FETCH_COURSES_PAGINATION:
      state.coursePagination = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default courseReducer;
