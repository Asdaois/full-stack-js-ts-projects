const foods = [
  {
    name: "Kitten",
    prize: "Yummi",
    img: "http://placekitten.com/300/200",
  },
  {
    name: "Kitten",
    prize: "Yummi",
    img: "http://placekitten.com/300/200",
  },
  {
    name: "Kitten",
    prize: "Yummi",
    img: "http://placekitten.com/300/200",
  },
  {
    name: "Kitten",
    prize: "Yummi",
    img: "http://placekitten.com/300/200",
  },
];
function createFood(name, prize, img) {
  const food = document.createElement("div");
  food.style.backgroundImage = `url(${img})`;
  food.style.width = "300px";
  food.style.height = "200px";

  const div = document.createElement("div");
  const foodName = document.createElement("h3");
  foodName.textContent = name;
  const foodPrize = document.createElement("h3");
  foodPrize.textContent = prize;
  div.style.display = "flex";
  div.appendChild(foodName);
  div.appendChild(foodPrize);
  div.classList.add("foodInfo");

  food.appendChild(div);
  return food;
}
function loadMenu() {
  console.log("menu page loading...");
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");
  foods.forEach((food) => {
    foodContainer.appendChild(createFood(food.name, food.prize, food.img));
  });
  return foodContainer;
}

export default loadMenu;
