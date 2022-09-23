"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ytdl_core_1 = __importDefault(require("ytdl-core"));
var showProgress_1 = __importDefault(require("./showProgress"));
var streamAudio = function (videoId, res) {
    return new Promise(function (resolve, reject) {
        try {
            var audioStream = (0, ytdl_core_1.default)("http://youtube.com/watch?v=".concat(videoId), { filter: 'audioonly', quality: 'lowestaudio' });
            (0, showProgress_1.default)(audioStream);
            audioStream.on('data', function (data) {
                res.write(data);
            });
            audioStream.on('finish', function () {
                res.end();
                resolve(res);
            });
        }
        catch (err) {
            reject(err);
        }
    });
};
exports.default = streamAudio;
