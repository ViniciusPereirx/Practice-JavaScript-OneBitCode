// const a = 0; //false

// const b = null; // false

// const c = "Teste"; // true

// console.log(a || b || c);

// console.log(a ?? b ?? c);

// console.log(b ?? c);

let a = 0;

let b = a || 42;

b = a ?? 42;
console.log({ a, b });

let c = null ?? 42;

console.log(c);
