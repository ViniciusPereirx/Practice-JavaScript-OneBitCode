function soma(a, b) {
  return a + b;
}

const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => a - b;

console.log(`${soma(2, 2)}`);
console.log(`${sum(5, 5)}`);
console.log(`${sub(10, 5)}`);

const double = (num) => `O dobro é ${num * 2}`;
console.log(double(10));

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startWithP = towns.filter((item) => item[0] === "P");

console.log(startWithP);
