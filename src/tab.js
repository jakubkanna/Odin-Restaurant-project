import pizzaImage from "./assets/flower-pizza.png";
import pizzaPhoto from "./assets/pexels-vincent-rivaud-2471171.jpg";

// class Tab is a template to create HTML tab inside main
class Tab {
  constructor(title, imagePath, content) {
    this.main = document.querySelector("main");
    this.title = title;
    this.imagePath = imagePath;
    this.content = content;
  }
  createTitle() {
    let titleElement = document.createElement("div");
    titleElement.setAttribute("id", "title");
    titleElement.innerHTML = `<h1>${this.title}</h1>`;
    this.main.appendChild(titleElement);
  }
  createImage() {
    let imgElement = document.createElement("img");

    Object.assign(imgElement, {
      id: "flower-pizza",
      src: pizzaImage,
      alt: "flower-pizza",
    });
    this.main.appendChild(imgElement);
  }
  createContent() {
    let contentElement = document.createElement("div");
    contentElement.setAttribute("id", "content");
    contentElement.innerHTML = this.content;
    this.main.appendChild(contentElement);
  }
  createTab() {
    this.main.innerHTML = ""; //clear main
    this.createTitle();
    this.createImage();
    this.createContent();
  }
}

//creates Home tab

function createHomeTab() {
  //save data for this tab
  const homeTabData = {
    title: "Welcome",
    image: pizzaImage,
    content: ` 🌸 Introducing Angelo's Pizzeria, where the aroma of freshly baked pizzas meets the vibrant energy of the flower market. Enjoy authentic Italian mastery with pizzas crafted by Angelo himself. Immerse in a floral oasis, savoring unique flavors amidst the blooms. Join us for a slice of heaven at the intersection of gastronomy and nature! 🍕🌺`,
  };
  //create new object and pass data
  const homeTab = new Tab(
    homeTabData.title,
    homeTabData.image,
    homeTabData.content
  );
  //create DOM element for this object with method
  return homeTab.createTab();
}

//creates Menu tab

function createMenuTab() {
  //make 10 card elements
  function createMenuCards() {
    //array of pizza objects
    const pizzas = [];

    class Pizza {
      constructor(name, ingredients, price) {
        this.name = name;
        this.ingredients = ingredients;
        this.price = price + "€";
      }
    }

    // Create 6 classic pizzas
    (() => {
      const capricciosa = new Pizza(
        "Capricciosa Roses",
        ["ham", "mushrooms", "mozarella", "Roses (Rosa spp.)"],
        "10"
      );
      pizzas.push(capricciosa);

      const margherita = new Pizza(
        "Margherita Nasturtiums",
        ["tomato", "mozzarella", "basil", "Nasturtiums (Tropaeolum majus)"],
        "8"
      );
      pizzas.push(margherita);

      const pepperoni = new Pizza(
        "Pepperoni Calendula",
        [
          "pepperoni",
          "tomato sauce",
          "mozzarella",
          "Calendula (Calendula officinalis)",
        ],
        "12"
      );
      pizzas.push(pepperoni);

      const quattroFormaggi = new Pizza(
        "Quattro Formaggi Lavender",
        [
          "gorgonzola",
          "fontina",
          "mozzarella",
          "parmesan",
          "Lavender (Lavandula spp.)",
        ],
        "11"
      );
      pizzas.push(quattroFormaggi);

      const hawaiian = new Pizza(
        "Hawaiian Violets",
        [
          "ham",
          "pineapple",
          "mozzarella",
          "tomato sauce",
          "Violets (Viola spp.)",
        ],
        "9"
      );
      pizzas.push(hawaiian);

      const veggie = new Pizza(
        "Veggie Chamomile",
        [
          "bell peppers",
          "mushrooms",
          "olives",
          "onions",
          "mozzarella",
          "Chamomile (Matricaria chamomilla)",
        ],
        "10"
      );
      pizzas.push(veggie);
    })();

    //create menu element
    const menuElement = document.createElement("div");
    menuElement.setAttribute("id", "food-menu");
    menuElement.innerHTML = `<h2>Pizza Classic 33cm</h2>`;

    //for each pizzas create card element
    for (const pizza of pizzas) {
      let cardElement = document.createElement("div");
      cardElement.setAttribute("class", "food-card");
      cardElement.innerHTML = `
        <div>
          <img
            src=${pizzaPhoto}
            alt="food-image"
            srcset="" />
        </div>
        <div>
          <div class="food-name">${pizza.name}</div>
          <div class="food-ingredients">${pizza.ingredients}</div>
          <div class="food-price">${pizza.price}</div>
        </div>
        <div><button>Add to Card</button></div>
      `;
      menuElement.appendChild(cardElement);
    }

    return menuElement.outerHTML;
  }
  //
  const menuTabData = {
    title: "Menu",
    image: pizzaImage,
    content: createMenuCards(),
  };
  const menuTab = new Tab(
    menuTabData.title,
    menuTabData.image,
    menuTabData.content
  );

  return menuTab.createTab();
}

//create contact tab

function createContactTab() {
  const contactTabData = {
    title: "Contact",
    image: pizzaImage,
    content: `<p>Thank you for choosing Angelo's Pizzeria! We're delighted to assist you. Whether you have a question, feedback, or just want to say hello, feel free to get in touch with us.</p>
  
    <h3>Visit Us</h3>
    <p>
      Angelo's Pizzeria<br>
      123 Pizza Street<br>
      Cityville, PZ 56789<br>
      Italy
    </p>
  
    <h3>Opening Hours</h3>
    <p>
      Monday - Friday: 11:00 AM - 10:00 PM<br>
      Saturday - Sunday: 12:00 PM - 11:00 PM
    </p>
  
    <h3>Contact Information</h3>
    <p>
      Phone: +39 0123 456 789<br>
      Email: info@angelospizzeria.com
    </p>
  
    <h3>Follow Us</h3>
    <p>
      Stay connected and follow us on social media for the latest updates, promotions, and mouth-watering pizza pictures!<br>
      Facebook | Instagram | Twitter
    </p>

  
    `,
  };
  const contactTab = new Tab(
    contactTabData.title,
    contactTabData.image,
    contactTabData.content
  );
  return contactTab.createTab();
}
export { createHomeTab, createMenuTab, createContactTab };
