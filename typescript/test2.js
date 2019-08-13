/**
 * 继承
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(distance);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('brak');
    };
    return Dog;
}(Animal));
var dog = new Dog();
/**
 *派生类
*/
var Ani = /** @class */ (function () {
    function Ani(theName) {
        this.name = theName;
    }
    ;
    Ani.prototype.move = function (value) {
        if (value === void 0) { value = 0; }
        console.log("move = " + value);
    };
    return Ani;
}());
var Sanke = /** @class */ (function (_super) {
    __extends(Sanke, _super);
    function Sanke(name) {
        return _super.call(this, name) || this;
    }
    ;
    Sanke.prototype.move = function (value) {
        if (value === void 0) { value = 5; }
        _super.prototype.move.call(this, value);
    };
    return Sanke;
}(Ani));
var tom = new Sanke("edddd");
tom.move();
