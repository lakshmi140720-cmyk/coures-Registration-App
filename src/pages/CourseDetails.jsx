import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import courses from "../data/courses";
import "../styles/CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((item) => item.id === Number(id));

  if (!course) {
    return (
      <div>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Course Not Found
        </h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="details-container">
        <div className="details-card">

          <div className="details-image">
            <img src={course.image} alt={course.title} />
          </div>

          <div className="details-content">

            <h1>{course.title}</h1>

            <p className="description">
              {course.description}
            </p>

            <div className="info">
              <p><strong>Trainer:</strong> {course.trainer}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Course Fee:</strong> {course.price}</p>
              <p><strong>Available Seats:</strong> {course.seats}</p>
            </div>

            <h3>Course Highlights</h3>

            <ul>
              <li>✔ Live Instructor-Led Classes</li>
              <li>✔ Real-Time Projects</li>
              <li>✔ Placement Assistance</li>
              <li>✔ Certificate After Completion</li>
              <li>✔ Interview Preparation</li>
            </ul>

            <div className="button-group">

              <button
  className="register-btn"
  onClick={() =>
    navigate("/register", {
      state: {
        courseName: course.title,
      },
    })
  }
>
  Register Now
</button>

              <button
                className="back-btn"
                onClick={() => navigate("/home")}
              >
                Back
              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default CourseDetails;