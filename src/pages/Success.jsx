import { Link } from "react-router-dom";

function Success() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#eef4ff",
      }}
    >
      <h1>🎉 Registration Successful!</h1>

      <p>
        Your course registration has been completed successfully.
      </p>

      <Link to="/home">
        <button
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default Success;