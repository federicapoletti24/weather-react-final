import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="Header">
      <h1 id="city">Hello Sunshine</h1>
      <ul>
        <li id="date"></li>
        <li>
          <span id="description">Today is going to be a great day</span>
        </li>
      </ul>
    </div>
  );
}
