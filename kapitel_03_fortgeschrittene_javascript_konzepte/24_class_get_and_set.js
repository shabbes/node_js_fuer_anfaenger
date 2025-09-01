class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.width = Math.sqrt(value);
    this.height = Math.sqrt(value);
  }
}

const rect = new Rectangle(4, 3);

console.log(rect.area); // 12

rect.area = 16;
console.log(rect.width); // 4
console.log(rect.height); // 4