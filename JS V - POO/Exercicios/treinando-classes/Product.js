class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100); //calculo procentagem
  }
}

const nameProduct = "Tênis Nike";
const description = "Lançamento da Nike";
const price = 150;

const tenis = new Product(nameProduct, description, price);

tenis.addToStock(10);

const priceWithDiscount = tenis.calculateDiscount(15);

console.log(tenis);
console.log(priceWithDiscount + " reais");
