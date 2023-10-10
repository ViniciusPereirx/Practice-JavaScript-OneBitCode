class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return (this.price / this.area).toFixed(2);
  }
}

class House extends Property {}

const land = new Property(200, 50000);

const someHouse = new House(120, 200000);

// console.log(land);

// console.log(someHouse.getPricePerSquareMeter());
// console.log(someHouse instanceof Property);

class Apartament extends Property {
  constructor(number, area, price) {
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

const someApartament = new Apartament('305', 200, 50000);

console.log(someApartament);
console.log(someApartament.getPricePerSquareMeter());
console.log(someApartament.getFloor());
