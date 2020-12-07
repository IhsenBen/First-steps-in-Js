let add = document.getElementById("plus");
let sous = document.getElementById("moin");

let int = document.getElementById("nombre")
let resultat = 0;

add.addEventListener("click", function () {
  resultat += 1;
  int.innerHTML = resultat;
})

sous.addEventListener("click", function () {
  resultat -= 1;
  int.innerHTML = resultat;
})
