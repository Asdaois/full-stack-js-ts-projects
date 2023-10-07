import React from "react";
import Card from "./Card.component";

export default function CardList({ monsters }) {
  return (
    <div className="w-4/5 my-0 mx-auto grid grid-cols-4 gap-5">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}
