import { Button } from "bootstrap";
import React from "react";

export default function Btn() {
    function klik() {
        alert("komunikat");

        const dane = prompt("przedstaw sie");
        alert();

    }
    return (
        <button onClick={klik}>komunikat</button>
    );
}


