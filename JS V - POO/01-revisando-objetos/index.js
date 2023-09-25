// const book = {
//   title: "Eragon",
//   pages: 450,
//   published: true,
//   inStock: 20,
//   tags: ["fantasy", "adventure", "medieval"],
//   author: {
//     name: "Vinicius Pereira",
//   },
//   //métodos
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
// };

//PascalCase / camelCase
function Book(title, pages, tags, author) {
  (this.title = title),
    (this.pages = pages),
    (this.tags = tags),
    (this.author = author);
  this.published = false;
  this.inStock = 0;
  this.addOnStock = (quantity) => {
    this.inStock += quantity;
  };
  this.save = () => {
    //Salvando no banco de dados
  };
}
const author = { name: "Vinicius" };
const tags = ["fantasy", "adventure"];

const eragon = new Book("Eragon", 468, tags, author);

console.log(eragon);

const eldest = new Book("Eldest", 500, tags, author);

console.log(eldest);
