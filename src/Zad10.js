import React from "react";

export default function Zad10() {
    const biblioteka = {ksiązka: "Dżuma", Autor: "Albert Camus"};
    sessionStorage.setItem("biblioteka", JSON.stringify(biblioteka));

    return (
        <div>
            <ul>
            <li><p>ksiązka: {biblioteka.ksiązka}</p></li>
            <li><p>Autor: {biblioteka.Autor}</p></li>
        </ul>
      </div>
    );
}