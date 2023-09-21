const average = (...numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`);

const weithedAverage = (...entries) => {
  const sum = entries.reduce(
    (acc, { number, weigth }) => acc + number * (weigth ?? 1),
    0
  );
  const weigthSum = entries.reduce(
    (acc, entry) => acc + (entry.weigth ?? 1),
    0
  );

  return sum / weigthSum;
};

console.log(
  `Média Ponderada: ${weithedAverage(
    { number: 9, weigth: 3 },
    { number: 7 },
    { number: 10, weigth: 1 }
  )}`
);
