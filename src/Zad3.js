import React from "react";

export default function Zad3() {
    let profil = JSON.parse(localStorage.getItem("profil"));

    if (!profil) {
        const imie = prompt("Podaj imię gracza:");
        const wiek = prompt("Podaj wiek gracza:");
        profil = { imie, wiek };
        localStorage.setItem("profil", JSON.stringify(profil));
    }

    return (
        <div>
            <p><strong>Imię:</strong> {profil.imie}</p>
            <p><strong>Wiek:</strong> {profil.wiek}</p>
        </div>
    );
}