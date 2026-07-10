import { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";
import "../styles/Home.css";

function Home() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Welcome to SkillHub</h1>
        <p>Find the best courses and start your learning journey today.</p>

        <input
          type="text"
          placeholder="Search Course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="course-section">
        <h2>Available Courses</h2>

        <div className="course-grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;