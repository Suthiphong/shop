"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = __importDefault(require("../controllers/user"));
var router = express_1.default.Router();
/*controller*/
var usercontroller = new user_1.default;
router.get('/login', usercontroller.Login);
router.get('/register', usercontroller.Register);
exports.default = router;
