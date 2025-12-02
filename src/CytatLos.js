import React from "react";

function CytatLos() {
  const cytaty = [
    "Fun fact: Superman pierwotnie miał być zielony.",
    "Najlepsza broń Batmana to jego inteligencja.",
    "Spider-Man jest inspiracją dla młodych bohaterów na całym świecie.",
    "Iron Man powstał jako symbol połączenia technologii i człowieczeństwa.",
    "Hulk pokazuje, że czasem gniew może być siłą napędową."
  ];

  const random = Math.floor(Math.random() * cytaty.length);
  const randomCytat = cytaty[random];

  return (
    <div style={{
      background: "white",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 0 5px rgba(0,0,0,0.3)",
      maxWidth: "600px",
      marginTop: "20px",
      fontStyle: "italic"
    }}>
      {randomCytat}
    </div>
  );
}

export default CytatLos;