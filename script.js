const resultimage = document.querySelector("js-result");
const button = document.querySelector("#js-button")

function getRandomImage() {
  const number = Math.floor(Math.random() * 7) + 1;
  return `./images/omikuji_${number}.png`;
}

function playOmikuji() {
  const timer = setInterval(function () {
    document.querySelector("#js-result").setAttribute("src", getRandomImage());
  }, 100);

  setTimeout(function () {
    clearInterval(timer);
  }, 3000);
}

document.querySelector("#js-button").addEventListener("click", playOmikuji);