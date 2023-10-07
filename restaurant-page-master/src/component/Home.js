import React from "react";
import { restaurantData } from "../data";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <h1 className="text-4xl text-red-500 mb-4">{restaurantData.name}</h1>
        <p className="md:w-1/2 m-auto text-justify">
          {restaurantData.descripcion}
        </p>
      </div>
      <div className="mt-6 m-auto ">
        <h2 className="text-2xl text-blue-500 mb-2">Working Hours</h2>
        <div className="md:mx-auto border-2 border-gray-400 max-w-max p-4 ring-blue-200 ring-1 rounded-md">
          {Object.keys(restaurantData.hours).map((day) => {
            return (
              <div
                className="text-left flex justify-between w-52"
                key={day.toLowerCase()}
              >
                <span className="w-1/2">{day}</span>
                <span className="">{restaurantData.hours[day]}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl text-blue-500 mb-2">Location</h2>
        <p className="md:w-1/2 m-auto text-center">
          {/* TODO: Add a real location*/}
          {"Where you want to eat ramen"}
        </p>
      </div>
    </div>
  );
}
