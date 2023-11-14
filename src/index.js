import "./style.css";
import { createHomeTab, createMenuTab, createContactTab } from "./tab";
import GitHubIcon from "./assets/github-mark.svg";

function createNavElement() {
  // Create nav element
  const navElement = document.createElement("nav");
  navElement.setAttribute("id", "menu");

  // Create ul element with class "menu-list"
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("class", "menu-list");

  // Create li elements with class "list-item"
  const homeLi = document.createElement("li");
  homeLi.setAttribute("class", "list-item");
  homeLi.textContent = "Home";

  const menuLi = document.createElement("li");
  menuLi.setAttribute("class", "list-item");
  menuLi.textContent = "Menu";

  const contactLi = document.createElement("li");
  contactLi.setAttribute("class", "list-item");
  contactLi.textContent = "Contact";

  // Append li elements to ul element
  ulElement.appendChild(homeLi);
  ulElement.appendChild(menuLi);
  ulElement.appendChild(contactLi);

  // Append ul element to nav element
  navElement.appendChild(ulElement);
  return { navElement, homeLi, menuLi, contactLi };
}

function setActiveTab(tabElement) {
  // Remove "active" class from all tabs
  document.querySelectorAll(".list-item").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Add "active" class to the clicked tab
  tabElement.classList.add("active");
}

window.addEventListener("load", () => {
  // Create menu buttons (destructuring)
  const { navElement, homeLi, menuLi, contactLi } = createNavElement();

  // Get the header element
  const headerElement = document.querySelector("header");

  // Insert nav element after the header
  headerElement.insertAdjacentElement("afterend", navElement);

  // Create default tab
  createHomeTab();

  // Set "active" class on the default tab
  homeLi.classList.add("active");

  // On button click, update the active tab and call the corresponding function
  homeLi.addEventListener("click", () => {
    setActiveTab(homeLi);
    createHomeTab();
  });

  menuLi.addEventListener("click", () => {
    setActiveTab(menuLi);
    createMenuTab();
  });

  contactLi.addEventListener("click", () => {
    setActiveTab(contactLi);
    createContactTab();
  });

  // Create a div element for the footer content
  const footerContent = document.createElement("div");
  footerContent.innerHTML = `
  <div style="display: flex; align-items: center; font-size: 10px; color: grey; padding: 6px;">
    <span style="padding-right: 6px;">
      <a target="_blank" href="https://github.com/jakubkanna/Odin-Restaurant-project/">
        For educational purposes only.</a>
      © 2023 Jakub Kanna.
    </span>
    <a href="https://github.com/jakubkanna/Odin-Restaurant-project/">
      <img src="${GitHubIcon}" width="16" height="16">
    </a>
  </div>
`;
  const footerElement = document.querySelector("footer");
  footerElement.appendChild(footerContent);
});

class Car {
  constructor(brand, color, engine) {
    this.brand = brand;
    this.color = color;
    this.engine = engine;
  }
  driveForward() {
    //go forward
  }
  driveBackward() {
    //
  }
  driveLeft() {
    //
  }
  driveRight() {
    //
  }
}
