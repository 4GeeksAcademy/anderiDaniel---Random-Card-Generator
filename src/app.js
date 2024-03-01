/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let suit = () => {
    let num = Math.floor(Math.random() * 4);
    if (num === 0) {
      return { palo: "♦", color: "red" };
    } else if (num === 1) {
      return { palo: "♥", color: "red" };
    } else if (num === 2) {
      return { palo: "♠", color: "black" };
    } else if (num === 3) {
      return { palo: "♣", color: "black" };
    }
  };

  let cardNumber = () => {
    let num = Math.floor(Math.random() * 13);
    if (num === 0) {
      return "A";
    } else if (num === 1) {
      return "K";
    } else if (num === 11) {
      return "J";
    } else if (num === 12) {
      return "Q";
    } else {
      return num;
    }
  };

  let paloArriba = document.querySelector(".card.suit.top");
  let paloAbajo = document.querySelector(".card.suit.bottom");
  let numero = document.querySelector(".card.number");

  let paloYColor = suit();

  paloArriba.innerHTML = paloYColor.palo;
  paloArriba.style.color = paloYColor.color;
  numero.innerHTML = cardNumber();
  numero.style.color = paloYColor.color;
  paloAbajo.innerHTML = paloYColor.palo;
  paloAbajo.style.color = paloYColor.color;

  // botón para refresh
  let button = document.querySelector(".button");
  button.addEventListener("click", function() {
    location.reload();
  });

  // alto y ancho
  let heightInput = document.getElementById("heightInput");
  let widthInput = document.getElementById("widthInput");
  let container = document.querySelector(".card.main");

  heightInput.addEventListener("change", function() {
    let altura = heightInput.value;
    container.style.height = altura + "px";
  });

  // aca probe usando el this. dentro del event listener
  widthInput.addEventListener("change", function() {
    container.style.width = this.value + "px";
  });

  // contador;
  let segundos = 10;
  function actualizarContador() {
    segundos--;
    document.getElementById(
      "contador"
    ).innerText = `time to reload: ${segundos}`;
  }

  setInterval(actualizarContador, 1000);

  setInterval(function() {
    window.location.reload();
  }, 10000);
};
