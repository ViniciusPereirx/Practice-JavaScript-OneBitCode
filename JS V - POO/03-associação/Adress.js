class Address {
  constructor(street, number, neighbor, city, state) {
    this.street = street;
    this.number = number;
    this.neighbor = neighbor;
    this.city = city;
    this.state = state;
  }

  fullAdress() {
    return `Rua: ${this.street}, nº ${this.number}, ${this.neighbor}, ${this.city}-${this.state}`;
  }
}

module.exports = Address;
