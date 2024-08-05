let Poids = 86; //kg
let Taille = 1.6; //m
let IMC = Poids / Taille ** 2;
if (IMC < 18.5) {
  let categorie = "Sous-poids";
} else if (IMC >= 18.5 && IMC < 25) {
  categorie = "Poids normal";
} else {
  categorie = "Surpoids"
}
console.log(categorie);
