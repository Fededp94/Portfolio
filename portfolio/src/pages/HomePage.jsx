import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/projects");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-primary text-white">
      <h1 className="display-4 mb-4">Benvenuto nel mio Portfolio</h1>
      <button
        className="btn btn-light btn-lg"
        onClick={handleEnter}
        style={{ borderRadius: "25px" }}>
        ENTRA
      </button>
    </div>
  );
};

export default HomePage;
