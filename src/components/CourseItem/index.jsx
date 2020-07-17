import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

class CourseItem extends Component {
    render() {
        let {
          tenKhoaHoc,
          hinhAnh,
          moTa,
          ngayTao,
          nguoiTao,
          luotXem,
          danhMucKhoaHoc,
        } = this.props.course;
        return (
          <div className="carousel_course_item">
            <Card>
              <CardImg top width="100%" height="150px" src={hinhAnh} alt="/" />
              <CardBody>
                <CardTitle>{tenKhoaHoc}</CardTitle>
                <CardSubtitle>{ngayTao}</CardSubtitle>
                <CardText>...</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        );
      }
}

export default CourseItem;
