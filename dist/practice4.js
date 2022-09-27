"use strict";
// [public, private]
//  public 으로 선언된 값은 클래스 외부에서 조회 할 수 있으며 private으로 선언된 값은 클래스 내부에서만 조회 할 수 있다
var Circle2 = /** @class */ (function () {
    function Circle2(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle2.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle2;
}());
var Rectangle2 = /** @class */ (function () {
    function Rectangle2(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle2.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle2;
}());
var circle = new Circle2(5);
var rectangle = new Rectangle2(10, 5);
console.log(circle.radius);
// console.log(rectangle.width); [error] width는 private이기 때문
var shapes2 = [new Circle2(5), new Rectangle2(10, 5)];
shapes2.forEach(function (shape) {
    console.log(shape.getArea());
});
