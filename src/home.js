function createHomePage() {
  const main = document.querySelector("main");
  let title = document.createElement("div");

  //title
  title.setAttribute("id", "title");
  title.innerHTML = `<h1>Welcome.</h1>`;
  main.appendChild(title);

  //image
  let img = document.createElement("img");
  Object.assign(img, {
    id: "flower-pizza",
    src: "assets/flower-pizza.png",
    alt: "flower-pizza",
  });
  main.appendChild(img);

  //content
  let content = document.createElement("div");
  content.setAttribute("id", "content");
  let para = document.createElement("p");
  para.innerHTML = ` 🌸 Introducing Angelo's Pizzeria, where the aroma of freshly baked
  pizzas meets the vibrant energy of the flower market. Enjoy
  authentic Italian mastery with pizzas crafted by Angelo himself.
  Immerse in a floral oasis, savoring unique flavors amidst the
  blooms. Join us for a slice of heaven at the intersection of
  gastronomy and nature! 🍕🌺`;
  content.appendChild(para);
  main.appendChild(content);
}
export { createHomePage };
