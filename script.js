const images = [
  "images/soon.png",
  "images/soon.png",
  "images/soon.png"
];

let index = 0;
let likes = Number(localStorage.getItem("likes")) || 0;

const slide = document.getElementById("slide");
const likesBox = document.getElementById("likes");

if (likesBox) likesBox.textContent = likes;

function next() {
  index = (index + 1) % images.length;
  slide.src = images[index];
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  slide.src = images[index];
}

function like() {
  likes++;
  localStorage.setItem("likes", likes);
  likesBox.textContent = likes;
}
