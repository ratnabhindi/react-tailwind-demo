import React from "react";

function Card({ title, description, content }) {
  return (
    <div className="card px-6 py-4">
      <div className="title mb-2">{title}</div>
      <p className="description text-base">{description}</p>
      <div className="px-6 pt-4 pb-2">{content}</div>
    </div>
  );
}

export default Card;
