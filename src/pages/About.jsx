import Navbar from "../components/Navbar";
import "../styles/About.css";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-container">
        <div className="about-card">

          <h1>About SkillHub</h1>

          <p className="intro">
            SkillHub Course Registration System is an online platform designed
            to help students explore, register, and manage professional courses
            with ease. Our goal is to provide quality education through
            industry-focused training programs.
          </p>

          <div className="about-section">
            <h2>🎯 Our Mission</h2>
            <p>
              To empower students with practical knowledge and industry-ready
              skills through high-quality learning programs.
            </p>
          </div>

          <div className="about-section">
            <h2>👁 Our Vision</h2>
            <p>
              To become one of the leading online learning platforms by
              delivering affordable, accessible, and career-oriented education.
            </p>
          </div>

          <div className="about-section">
            <h2>⭐ Why Choose Us?</h2>

            <ul>
              <li>Expert Trainers</li>
              <li>Live Interactive Classes</li>
              <li>Hands-on Projects</li>
              <li>Placement Assistance</li>
              <li>Industry Recognized Certificate</li>
              <li>Flexible Learning Schedule</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>📚 Available Courses</h2>

            <div className="course-list">
              <div className="course-box">React Development</div>
              <div className="course-box">Java Full Stack</div>
              <div className="course-box">Python Programming</div>
              <div className="course-box">Cyber Security</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;