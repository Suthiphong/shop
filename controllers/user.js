"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../services/userservice/user");
var us = new user_1.userService;
var userController = /** @class */ (function () {
    function userController() {
    }
    userController.prototype.Register = function (req, res) {
        res.send(us.Create());
    };
    userController.prototype.Login = function (req, res) {
        res.json({
            status: 200,
        });
    };
    userController.prototype.GetById = function (req, res) {
    };
    return userController;
}());
exports.default = userController;
