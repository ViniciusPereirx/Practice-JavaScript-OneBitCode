const Database = require("./Database");
const Author = require("./class/Author");
const Book = require("./class/Book");
const Order = require("./class/Order");
const Poster = require("./class/Poster");
const User = require("./class/User");

module.exports = class App {
  static #database = new Database();

  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user);
  }

  getUsers() {
    return App.#database.find("users");
  }

  createAuthor(name, nationatily, bio) {
    const author = new Author(name, nationatily, bio);
    App.#database.saveAuthor(author);
  }

  getAuthors() {
    return App.#database.find("authors");
  }

  createBook(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock
  ) {
    const book = new Book(
      title,
      synopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock
    );
    App.#database.saveBook(book);
  }

  addBook(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity);
  }

  getBooks() {
    return App.#database.find("books");
  }

  createPoster(name, description, height, width) {
    const poster = new Poster(name, description, height, width);
    App.#database.savePoster(poster);
  }

  addPoster(posterName, quantity) {
    App.#database.addPostersToStock(posterName, quantity);
  }

  createOrder(items, user) {
    const order = new Order(items, user);
    App.#database.saveOrder(order);
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#database.removeBooksFromStock(product.name, quantity);
      } else if (product instanceof Poster) {
        App.#database.removePostersFromStock(product.name, quantity);
      }
    });
  }

  getOrders() {
    return App.#database.find("orders");
  }

  showDatabase() {
    App.#database.showStorage();
  }
}
