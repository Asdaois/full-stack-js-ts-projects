import lybraryImage from "assets/animations/library.gif";
export const curriculum = {
  title: "Full Stack Javascript",
  description:
    "This path takes you through our entire JavaScript curriculum. The courses should be taken in the order that they are displayed. You'll learn everything you need to know to create beautiful responsive websites from scratch using JavaScript and NodeJs.",
  paths: [
    {
      title: "JavaScript",
      description:
        "Make your websites dynamic and interactive with JavaScript! You'll create features and stand-alone applications. This module includes projects where you will learn how to manipulate the DOM, use object-oriented programming principles, and build single page applications with React.",
      projects: [
        {
          title: "Library",
          description: "A small Library app of books.",
          image: lybraryImage,
        },
        {
          title: "Tic Tac Toe",
          description: "A implementation of the famous game",
          image: "",
        },
        { title: "Restaurant Page", description: "NOT YET", image: "" },
        { title: "Todo List", description: "NOT YET", image: "" },
        { title: "Weather App", description: "NOT YET", image: "" },
        { title: "Battleship", description: "NOT YET", image: "" },
        { title: "CV Aplication", description: "NOT YET", image: "" },
        { title: "Memory Card", description: "NOT YET", image: "" },
        { title: "Shopping Cart", description: "NOT YET", image: "" },
        { title: "Where's Waldo", description: "NOT YET", image: "" },
        { title: "Final Project", description: "NOT YET", image: "" },
      ],
    },
    {
      title: "Node",
      description:
        "Take your JavaScript skills to the server-side! Learn how to fully craft your site's backend using Express, the most popular back-end JavaScript framework! You will also learn how to use a non-relational database, MongoDB.",
      projects: [
        {
          title: "Basic Informational Site",
          description: "NOT YET",
          image: "",
        },
        { title: "Mini Message Board", description: "NOT YET", image: "" },
        { title: "Forms and Deployment", description: "NOT YET", image: "" },
        { title: "Inventory Application", description: "NOT YET", image: "" },
        { title: "Members Only", description: "NOT YET", image: "" },
        { title: "Blog API", description: "NOT YET", image: "" },
        { title: "Odin-Book", description: "NOT YET", image: "" },
      ],
    },
  ],
};
