/*const cocheraGrande = document.getElementById("parking-cars");

const inputName = document.getElementById("name");


*/

const inputName = document.getElementById("name");
const formulario = document.getElementById("form");
const cocheras = document.querySelectorAll(".parking-cars div");

const cocherasArray = Array.from(cocheras);

const plazas = [
  { numero: 1, libre: true, name: "" },
  { numero: 2, libre: true, name: "" },
  { numero: 3, libre: true, name: "" },
  { numero: 4, libre: true, name: "" },
  { numero: 5, libre: true, name: "" },
  { numero: 6, libre: true, name: "" },
  { numero: 7, libre: true, name: "" },
  { numero: 8, libre: true, name: "" },
  { numero: 9, libre: true, name: "" },
  { numero: 10, libre: true, name: "" },
  { numero: 11, libre: true, name: "" },
  { numero: 12, libre: true, name: "" },
  { numero: 13, libre: true, name: "" },
  { numero: 14, libre: true, name: "" },
  { numero: 15, libre: true, name: "" },
];

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let clickedValue = inputName.value;
  for (let plaza of plazas) {
    if (plaza.libre === true) {
      plaza.name = clickedValue;
      plaza.libre = false;
      for (let div of cocherasArray) {
        if (parseInt(div.innerHTML) === plaza.numero) {
          div.style.backgroundColor = "#8A2323";
        }
      }
      break;
    }
  }
  console.log(plazas);
});

/*
function aparcar(x) {
  for (let plaza of plazas) {
    if (plaza.libre === true) {
      plaza.name = x;
      plaza.libre = false;
      break;
    }
  }
} */

/*
let libres = [];
let ocupados = [];

plazas.map((plaza) => {
  return plaza.libre === true ? libres.push(plaza) : ocupados.push(plaza);
});

for (let libre of libres) {
  let numberOfLibre = libre.numero;
  for (let div of cocherasArray) {
    if (parseInt(div.innerHTML) === numberOfLibre) {
      div.style.backgroundColor = "#689056";
    }
  }

  let storageLibre = "libre";
  let valorTrue = localStorage.setItem(storageLibre, numberOfLibre);
}

for (let ocupado of ocupados) {
  let numberOfOcupados = ocupado.numero;
  for (let div of cocherasArray) {
    if (parseInt(div.innerHTML) === numberOfOcupados) {
      div.style.backgroundColor = "#8A2323";
    }
  }

  let storageLibre = "ocupado";
  let valorTrue = localStorage.setItem(storageLibre, numberOfOcupados);
};
*/

function openDiv() {
  formulario.style.display = "block";
}
