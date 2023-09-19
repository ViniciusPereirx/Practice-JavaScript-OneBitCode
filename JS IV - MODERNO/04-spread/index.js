const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
console.log(townsCopy);
townsCopy.push("Juno");

console.log({ towns, townsCopy });

const townsClone = [...towns];

townsClone.push("Alde");

console.log({ towns, townsCopy, townsClone });

const townsObj = { ...towns };

const townsObjClone = { ...townsObj };

townsObjClone.test = "Teste";

console.log({ townsObj, townsObjClone });
