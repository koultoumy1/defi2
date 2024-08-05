const montantFacture = 200; //euro
const pourcentagePourboire = 15; //%
let montantPouroire = (montantFacture * pourcentagePourboire) / 100;
let total = montantFacture + montantPouroire;
console.log("Le montant de la facture est : " + montantFacture + " EURO");
console.log("Le montant du pourboire est " + montantPouroire+ " EURO");
console.log("Le montant total de la facture est " + total+ " EURO");
