"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = __importDefault(require("./routers/user"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var server = express_1.default();
server.use(cors_1.default());
server.use(body_parser_1.default.urlencoded({ extended: true }));
server.use('/user', user_1.default);
server.listen(3000, function () { return console.log("server is running port 3000"); });
