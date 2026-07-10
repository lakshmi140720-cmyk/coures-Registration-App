import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/MyCourses.css";

function MyCourses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("registeredCourses")) || [];

    setCourses(data);
  }, []);

  const removeCourse = (index) => {

    const updatedCourses = [...courses];

    updatedCourses.splice(index, 1);

    setCourses(updatedCourses);

    localStorage.setItem(
      "registeredCourses",
      JSON.stringify(updatedCourses)
    );
  };

  return (
    <>
      <Navbar />

      <div className="mycourses-container">

        <h1>My Registered Courses</h1>

        {courses.length === 0 ? (

          <h3>No Courses Registered Yet</h3>

        ) : (

          <div className="course-list">

            {courses.map((course, index) => (

              <div className="registered-card" key={index}>

                <h2>{course.course}</h2>

                <p>Email : {course.email}</p>

                <p>Phone : {course.phone}</p>

                <p>College : {course.college}</p>

                <p>Department : {course.department}</p>

                <p>Year : {course.year}</p>

                <button
                  onClick={() => removeCourse(index)}
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </>
  );
}

export default MyCourses;