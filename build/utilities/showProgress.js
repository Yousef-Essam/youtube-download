"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var showProgress = function (stream) {
    var cols = process.stdout.columns;
    var currentDots = 0;
    stream.on('progress', function (chunk, down, total) {
        if (!currentDots)
            console.log("Downloading ".concat(total, " bytes of data."));
        var newDots = Math.ceil(down / total * cols);
        var dotsToAdd = newDots - currentDots;
        for (var i = 0; i < dotsToAdd; i++)
            process.stdout.write('.');
        currentDots = newDots;
    });
};
exports.default = showProgress;
