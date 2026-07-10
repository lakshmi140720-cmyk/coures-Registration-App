import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />

      <div className="course-content">
        <h3>{course.title}</h3>

        <p><b>Trainer:</b> {course.trainer}</p>
        <p><b>Duration:</b> {course.duration}</p>
        <p><b>Price:</b> {course.price}</p>
        <p><b>Seats:</b> {course.seats}</p>

        <button
          onClick={() => navigate(`/course/${course.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default CourseCard;