import React from "react";

const UserCard = (props) => {
  const color1 = Math.floor(Math.random() * 256);
  const color2 = Math.floor(Math.random() * 256);
  const color3 = Math.floor(Math.random() * 256);

  return (
    <div
      className="card"
      style={{ backgroundColor: `rgb(${color1},${color2},${color3})` }}
    >
      <h2 className="card-id">User ID: {props.elem.id}</h2>
      <p>
        <span>Name:</span> {props.elem.name}
      </p>
      <p>
        <span>Username:</span> {props.elem.username}
      </p>
      <p>
        <span>Email:</span> {props.elem.email}
      </p>
    </div>
  );
};

export default UserCard;
