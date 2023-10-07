import React from "react";

export default function Card({ monster }) {
  return (
    <div
      className="flex flex-col bg-green-300 border border-solid border-gray-500 rounded-md p-6 cursor-pointer  transition-transform duration-300 transform hover:scale-105 text-center"
      style={{ backfaceVisibility: "hidden" }}
    >
      <img
        src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
        alt="monsters"
      />
      <h2 className="text-2xl font-bold">{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
}
