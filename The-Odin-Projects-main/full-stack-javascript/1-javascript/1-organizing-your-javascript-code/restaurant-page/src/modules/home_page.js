function createDivWithBackground(url = "") {
  const div = document.createElement("div");
  div.style.backgroundImage = `url(${url})`;
  return div;
}
function createWonderfulText(text = "") {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

function loadHome() {
  const url =
    "https://i.pinimg.com/736x/d5/b0/57/d5b05718184de87b97c4eeca5950b195.jpg";
  const div = createDivWithBackground(url);
  const headline = document.createElement("h2");
  headline.classList.add("neon");
  headline.textContent = "Come to eat the future";
  div.appendChild(headline);

  const text = `A police business and marinara business was limits sandwich for spaghetti dining to meatball beppo for beppo business die police important. Sandwich dining to police important to spaghetti restaurant of dining serves Mob beppo all violence open and business open. For open police and police sandwich an violence mean!
        All sandwich die beppo and dining sandwich all marinara meatball a business business and business business to restaurant mean. To dining dining to marinara important for mean sandwich was limits open. And sport violence an beppo off open meatball and police sandwich a dining dining.
        An limits sandwich was marinara police to meatball limits to plate police a limits open. All mean important of sport marinara and sport business die limits sandwich. For business dining off limits mean and limits sandwich. Mob spaghetti sandwich die open plate for police police Mob open beppo die beppo plate and business meatball.`;
  const pWonderfull = createWonderfulText(text);
  div.appendChild(pWonderfull);
  div.id = "homeContainer";
  return div;
}
export default loadHome;
