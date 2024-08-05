let PrixOriginal = 100000;
let pourcentageReduction = 5; //%
let montantReduction = (PrixOriginal * pourcentageReduction) / 100;
let nouveauPrix = PrixOriginal - montantReduction;
console.log("Le prix original est : " + PrixOriginal);
console.log("Le montant de la réduction est : " + montantReduction);
console.log("Le nouveau prix est : " + nouveauPrix);
