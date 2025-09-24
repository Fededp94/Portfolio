import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/projects");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-primary text-white p-3 text-center">
      <h1
        className="mb-4"
        style={{ fontSize: "clamp(1.8rem, 3vw + 1rem, 3rem)" }}>
        Benvenuto nel mio Portfolio
      </h1>
      <button
        className="btn btn-light btn-lg px-4 py-2"
        onClick={handleEnter}
        style={{
          borderRadius: "25px",
          fontSize: "clamp(1rem, 1vw + .8rem, 1.25rem)",
        }}
        aria-label="Entra nel portfolio">
        ENTRA
      </button>
    </div>
  );
};

export default HomePage;
