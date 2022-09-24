"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
var prompt = function (promptMessage) {
    if (promptMessage === void 0) { promptMessage = ''; }
    return new Promise(function (resolve, reject) {
        var rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(promptMessage, function (input) {
            resolve(input);
            rl.close();
        });
    });
};
exports.default = prompt;
