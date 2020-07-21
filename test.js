"use strict";
var ABC = /** @class */ (function () {
    function ABC() {
    }
    ABC.prototype.A = function () {
        return "ABBB";
    };
    ABC.prototype.B = function () {
        return "B";
    };
    return ABC;
}());
var Person = /** @class */ (function () {
    function Person(us) {
        this.us = us;
    }
    Person.prototype.showDisplay = function () {
        console.log(this.us.A());
    };
    return Person;
}());
var ABCA = new ABC;
var member = new Person(ABCA);
member.showDisplay();
