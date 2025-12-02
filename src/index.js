import React from "react";
import ReactDOM from "react-dom/client";
import { MiniPortal } from "./MiniPortal";

export const bohaterowie = [
  ["Bogdan Boner", "Egzorcysta za niecałe 300, pasja: Ojczysta."],
  ["Domino", "Może i nie jest mądry za to głupi."],
  ["Marcinek", "Nie dostał wypłaty do tej pory."],
  ["Spejson", "Poprostu mięśnie nic wiecej."],
  ["Wojtas", "Prawo jazdy and Polones. (aktualnie Bawara)"],
  ["Walu", "Mózg całej bandy."]
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MiniPortal />);