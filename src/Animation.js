import React from "react";

const Animation = ({ lista }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {lista.map((b, i) => (
        <div
          key={i}
          style={{
            width: "220px",
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 0 5px"
          }}
        >
          <h3>{b[0]}</h3>
          <p>{b[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default Animation;