import React from "react";

export default function Zad5() {

    const wiadomosc = "u nas na wigili zawsze była woda";

    sessionStorage.setItem("message", wiadomosc);

    return (
        <div>
            <p>{wiadomosc}</p>
        </div>
    );
}