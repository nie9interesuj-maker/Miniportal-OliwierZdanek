import React from "react";

export default function Zad4() {
    const users = [
        { name: "Albert" },
        { name: "Beata" },
        { name: "Cezary" }
    ];
    localStorage.setItem("users", JSON.stringify(users));

    return (
        <div>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}