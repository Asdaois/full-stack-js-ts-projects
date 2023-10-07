import React, { useLayoutEffect as useEffect, useRef, useState } from "react";

export default function Food({ food, index }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const topPosition = ref.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (topPosition < scrollPosition) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="flex border-2 rounded-lg border-gray-400 bg-gray-200 text-gray-700 lg:w-1/2 self-center flex-col lg:flex-row md:w-1/3 lg:h-72 "
      key={food.name.toLowerCase()}
    >
      <div
        className={`flex flex-col flex-none lg:h-72 lg:w-1/2 lg:${
          index % 2 === 0 ? "order-1" : null
        }`}
      >
        <h3 className="text-2xl h-1/4 text-center self-center pt-3 text-blue-500 lg:h-auto">
          {food.name}
        </h3>
        <p className="h-full p-3">{food.description}</p>
      </div>
      <img
        src={food.image}
        alt=""
        className={`flex-none rounded-lg lg:w-1/2 transform transition-all ease-in-out duration-500 object-cover translate-x-0 md:opacity-0 lg:h-auto md:${
          show
            ? "opacity-100 translate-x-0"
            : index % 2
            ? "translate-x-1/3 opacity-0"
            : "-translate-x-1/3 opacity-0"
        }`}
      />
    </div>
  );
}
