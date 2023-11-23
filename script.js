let nombre = "";
const pin = 2023;
let pinUser = document.getElementById("pin");
let form = document.getElementById("form-login");

const validarFormulario = () => {
  let contrasenia = pinUser.value;
  if (contrasenia == pin) {
    location.href = "./inicio.html";
    document.cookie = "manolo=2023";
  } else {
    alert("pin erroneo");
  }
};

function nextPage() {
  location.href = "./tablas.html";
}

const table = document.getElementById("tabla");
console.log(table);
