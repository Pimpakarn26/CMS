import React from "react";

const Card = ({ name, type, code, creditHours, gradeLevel, classroom }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Type: {type}</p>
          <p>Code: {code}</p>
          <p>Credit Hours: {creditHours}</p>
          <p>Grade Level: {gradeLevel}</p>
          <p>Classroom: {classroom}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
