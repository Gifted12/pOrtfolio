// jshint esversion:6

import Work from "./skill.js";
const works = document.querySelector(".work_sub");
const buggeropen = document.querySelector(".bugger");
const mobilediv = document.querySelector(".mobilediv");
const buggerclose = document.querySelector(".buggerclose");
const thea = document.querySelector(".mobileul");
const theimgwrapper = document.getElementById("works_sub");
const body = document.querySelector("body");
const cusor = document.getElementById("cusorr");
const contactForm = document.getElementById("contact-form");

function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function getrandom(min = 20, max = 150, randomnum = Math.random()) {
  return Math.floor(randomnum * (max - min) * min);
}
async function draw(el) {
  const text = el.textContent;
  let sofar = "";
  for (const letter of text) {
    sofar += letter;
    el.textContent = sofar;
    await wait(40);
  }
}

const els = document.querySelectorAll("[data-type]");
els.forEach(draw);

const open = () => {
  mobilediv.classList.toggle("opened");
  body.style.overflow = "hidden";
};
const close = () => {
  setTimeout(() => {
    mobilediv.classList.toggle("opened");
    body.style.overflow = "scroll";
  }, 250);
};
buggeropen.addEventListener("click", open);
buggerclose.addEventListener("click", close);
thea.addEventListener("click", close);

//////////////////////////////////////////////////////
function createComponentHTML(element) {
  return `
    <a  href= ${element.link} class="theimgwrapper" target="_blank"  rel="noopener noreferrer">
    <img class="myimg1" src=${element.img} alt="img" />
    <p class="title">${element.title}</p>
    <p class="discription">${element.discription}</p>
  </a>
  `;
}

function displayComponents() {
  works.innerHTML = Work.map(createComponentHTML).join("");

  const links = document.querySelectorAll(".theimgwrapper");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {});
  });
}
document.addEventListener("DOMContentLoaded", displayComponents);

const date = new Date().getFullYear();
document.querySelector(
  ".rights"
).innerHTML = `© ${date} Josiah Yisa. All right reserved.`;
