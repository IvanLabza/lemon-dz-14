const mobileMenu = document.getElementById("menu-container");

const openBtn = document.getElementById("btn-open");

const closeBtn = document.getElementById("btn-close");

const headElement = document.querySelectorAll("head-element");

openBtn.onclick = () => {
  mobileMenu.classList.add("_active");
};

closeBtn.onclick = () => {
  mobileMenu.classList.remove("_active");
};

headElement.onclick = () => {
  mobileMenu.classList.remove("_active");
};
