// [public, private]
//  public 으로 선언된 값은 클래스 외부에서 조회 할 수 있으며 private으로 선언된 값은 클래스 내부에서만 조회 할 수 있다

interface Shape {
  getArea(): number; 
}

class Circle2 implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle2 implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle2(5);
const rectangle = new Rectangle2(10, 5);

console.log(circle.radius);
// console.log(rectangle.width); [error] width는 private이기 때문

const shapes2: Shape[] = [new Circle2(5), new Rectangle2(10, 5)];

shapes2.forEach(shape => {
  console.log(shape.getArea());
})


