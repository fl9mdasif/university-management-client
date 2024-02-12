import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const params = useParams();
  return <div>student details of {params.studentId}</div>;
};

export default StudentDetails;
