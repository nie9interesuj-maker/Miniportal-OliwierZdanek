import React from "react";

const ButtonMsg = () => {
  let userName = localStorage.getItem("userName") || "";

  const handleClick = () => {
    const name = prompt("Podaj swoje imię:");
    if (name) {
      localStorage.setItem("userName", name);
      document.getElementById("greeting").innerText = `Witaj ponownie, ${name}!`;
    }
  };

  return (
    <div>
      {}
      <button
        onClick={handleClick}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Przedstaw się
      </button>

      {}
      <p id="greeting" style={{ marginTop: "10px", fontWeight: "bold" }}>
        {userName ? `Witaj ponownie, ${userName}!` : ""}
      </p>
    </div>
  );
};

export default ButtonMsg;