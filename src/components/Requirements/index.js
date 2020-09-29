import React from "react";
import "./requirements.css";

const Requirements = () => {
  return (
    <div className="border-shadow">
      <div className="flexbox-container-requirements">
        <div className="center-title-requirements">
          <div className="title-requirements">
            <p>Requerimientos</p>
          </div>
        </div>
        <div className="flexbox-tips">
          <div className="tips">
            <div className="color-bullet-green">•</div>
            <div className="text-center">
              Estudiantes avanzados o recibidos de carreras del rubro
              informático, sistemas o electrónicos
            </div>
          </div>
          <div className="tips">
            <div className="color-bullet-dark">•</div>
            <div className="text-center">Inglés intermedio/avanzado</div>
          </div>
          <div className="tips">
            <div className="color-bullet-blue">•</div>
            <div className="text-center">
              Conocimiento en metodologías ágiles (deseable)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
