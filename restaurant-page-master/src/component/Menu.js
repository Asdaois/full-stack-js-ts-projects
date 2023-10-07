import React from "react";
import { restaurantData } from "../data";
import Food from "./Food";

export default function Menu() {
  return (
    <div>
      <h1 className="text-4xl text-red-500 mb-4">Menu</h1>
      <div className="flex flex-col gap-5 justify-center">
        {restaurantData.menu.map((food, i) => {
          return <Food food={food} index={i} />;
        })}
      </div>
    </div>
  );
}
