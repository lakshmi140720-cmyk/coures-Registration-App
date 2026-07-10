import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const courseName = location.state?.courseName || "";

  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
    course: courseName,
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredCourses =
      JSON.parse(localStorage.getItem("registeredCourses")) || [];

    registeredCourses.push(student);

    localStorage.setItem(
      "registeredCourses",
      JSON.stringify(registeredCourses)
    );

    navigate("/success");
  };

  return (
    <div className="register-container">
      <div className="register-card">

        <h1>Course Registration Form</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="college"
            placeholder="College Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            onChange={handleChange}
            required
          />

          <select
            name="year"
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          <input
            type="text"
            value={student.course}
            readOnly
          />

          <button type="submit">
            Register Course
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;