const TAUX_CHANGE = 0.85; // 1 USD = 0.85 EUR
let montantDollars = 1000;
let montantEURO = montantDollars / TAUX_CHANGE;
console.log("Le montant en EURO est " + montantEURO);