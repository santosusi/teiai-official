import React from "react";

function EmployeeCard({ name, role, description, img, quote }) {
  return (
    <div className="card">
      <div className="quote">「{quote}」</div>
      <img src={img} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{description}</p>
    </div>
  );
}

export default EmployeeCard;


