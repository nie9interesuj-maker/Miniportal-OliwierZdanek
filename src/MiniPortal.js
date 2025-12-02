import React from "react";
import Header from "./Header";
import Animation from "./Animation";
import { bohaterowie } from "./index";
import ButtonMsg from "./ButtonMsg";
import CytatLos from "./CytatLos";

const kolory = ['red', 'aqua', 'lemon', 'lightgreen', 'purple'];
const random = Math.floor(Math.random() * kolory.length);
const randomKolor = kolory[random];

export function MiniPortal() {
  return (
    <div style={{ background: randomKolor, minHeight: "100vh", padding: "20px" }}>
      <Header tytul="Portal o bohaterach Bartosza Walaszka" />
      <p>Witom i o zdrowie pytamx</p>

      <Animation lista={bohaterowie} />
      <br/>
      <ButtonMsg/>
      <br/>

      <CytatLos />  {}
    </div>
  );
}