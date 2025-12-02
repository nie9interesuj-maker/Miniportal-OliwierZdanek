import React from "react";

export default function Zad6() {
    const zadania = ["Kupić mleko", "Odebrać paczkę", "Sprzątać pokój"];
    sessionStorage.setItem("zadania", JSON.stringify(zadania));

    return (
        <div>
            <ul>
                {zadania.map((zadania, index) => (
                    <li key={index}>{zadania}</li>
                ))}
            </ul>
        </div>
    );
}