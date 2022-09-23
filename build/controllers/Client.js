"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.getFullPath = void 0;
var https_1 = __importDefault(require("https"));
;
var getFullPath = function (options) {
    var fullPath = options.path;
    if (options.qs) {
        fullPath += '?';
        var arr = [];
        for (var key in options.qs) {
            if (options.qs[key])
                arr.push("".concat(key, "=").concat(options.qs[key]));
        }
        fullPath += arr.join('&');
    }
    return fullPath;
};
exports.getFullPath = getFullPath;
var get = function (reqOptions) {
    return new Promise(function (resolve, reject) {
        try {
            var options = {
                host: reqOptions.host,
                path: (0, exports.getFullPath)(reqOptions)
            };
            var str_1 = '';
            var req = https_1.default.request(options, function (res) {
                res.on('data', function (data) {
                    str_1 += data;
                });
                res.on('end', function () {
                    resolve(str_1);
                });
            });
            req.on('error', function (err) {
                throw err;
            });
            req.end();
        }
        catch (err) {
            reject(err);
        }
    });
};
exports.get = get;
