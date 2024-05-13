/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
import { useGetAllEnrolledCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";

const MySchedule = () => {
  const { data } = useGetAllEnrolledCoursesQuery(undefined);
  // console.log(data);

  return (
    <div>
      {data?.data?.map((item: any) => {
        const { faculty, isCompleted, course } = item;
        console.log(item);
        return (
          <Row
            justify="space-between"
            align="middle"
            style={{ borderTop: "solid #d4d4d4 2px", padding: "10px" }}
          >
            <Col span={3}>Course Name: {course.title} </Col>
            <Col span={3}>faculty: {faculty.fullName} </Col>
            <Col span={2}>
              days:{" "}
              {item.offeredCourse.days.map((day: any) => (
                <span> {day} </span>
              ))}
            </Col>
            <Col span={2}>Grade: {item.grade} </Col>
            <Col span={2}>CGPA {item.gradePoints} </Col>
            {/* <Col span={5}>TotalMarks{item.gradePoints} </Col> */}
            <Col span={2}>
              isCompleted : {isCompleted ? "done" : "notCompleted"}
            </Col>
            {/* <Col span={5}>End Time: {section.endTime} </Col> */}
            {/* <Button onClick={() => handleEnroll(section._id)}>Enroll</Button> */}
          </Row>
        );
      })}
    </div>
  );
};

export default MySchedule;
