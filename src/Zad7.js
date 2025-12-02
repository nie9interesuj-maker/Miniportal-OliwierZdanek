import React from "react";

export default function Zad7() {

        const imie = localStorage.getItem("user"); 
        alert("Twoje imię to: " + imie); 


    return (
        <div>
            <button onClick={Zad7}>
                Pokaż imię
            </button>
        </div>
    );
}