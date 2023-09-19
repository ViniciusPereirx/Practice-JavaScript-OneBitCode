const person = { name: "Luke", job: "Farmer", parents: ["Pai", "Mãe"] };

const name = person.name;

const { job, parents } = person;

console.log(name, job, parents);

const [father, mother] = parents;

console.log(father, mother);

function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999); //Gerando ID aleatório
  return {
    id,
    name: name,
    job: job,
    parents: parents,
  };
}

const luke = createUser(person);

console.log(luke);
