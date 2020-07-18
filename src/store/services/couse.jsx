import axios from "axios";

class CourseService {
  fetchCourses = () => {
    return axios.get(
      "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
    );
  };
  fetchCourseDetail = (id) => {
    return axios.get(
      `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
    );
  };
  fetchCoursePagination = (page, pageSize, maNhom) => {
    return axios.get(
      `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=${maNhom}`
    );
  };
  fetchCategories = () => {
    return axios.get(
      "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc"
    );
  };
  fetchCoursesOnCategory = (maDanhMuc, maNhom) => {
    return axios.get(
      `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`
    );
  };
}

export default CourseService;
