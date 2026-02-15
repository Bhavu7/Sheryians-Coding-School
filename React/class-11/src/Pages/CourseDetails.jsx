import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1 className="text-5xl underline text-blue-500 font-extrabold absolute whitespace-nowrap top-1/2 left-1/2 -translate-1/2">
        <span className="text-red-600 mr-4 underline">{params.courseId}</span>
        Course Details Page Here!
      </h1>
    </div>
  );
};

export default CourseDetails;
