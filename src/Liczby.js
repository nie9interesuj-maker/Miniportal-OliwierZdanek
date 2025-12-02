import React from "react";

const tablica =[1, 15, 12, 51, 8];
localStorage.setItem("tablica", JSON.stringify(tablica));

export default function Liczby(){
    
    const liczby = JSON.parse(localStorage.getItem("tablica"))
    return (
        <div>
            <h2>tablica</h2>
            <p>{liczby.join(", ")}</p>
        </div>
    );
};