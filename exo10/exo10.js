const AGE_MINIMUM_VOTE = 18;
let age = 10;
if (age >= AGE_MINIMUM_VOTE) {
  console.log("eligible au vote");
} else {
  let rest = AGE_MINIMUM_VOTE - age;
  console.log("Eligible dans " + rest + " ans");
}
