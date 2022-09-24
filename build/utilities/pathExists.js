"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var pathExists = function (path) {
    return new Promise(function (resolve, reject) {
        fs_1.default.stat(path, function (err, stat) {
            if (err)
                resolve(false);
            else
                resolve(true);
        });
    });
};
exports.default = pathExists;
