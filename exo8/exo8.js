let note = 82;
if (note >= 90 && note <= 100) {
  console.log(note + " Mention: Excellent");
} else if (note >= 80 && note <= 89) {
  console.log(note + " Mention: Très bien");
} else if (note >= 70 && note <= 79) {
  console.log(note + " Mention: Bien");
} else if (note >= 60 && note <= 79) {
  console.log(note + " Mention:  Assez Bien");
} else if (note >= 50 && note <= 59) {
  console.log(note + " Mention: Passable");
} else {
  console.log(note + " Mention: Insuffisant");
}
