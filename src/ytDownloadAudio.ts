#! /usr/bin/env node

import streamAudio from "./utilities/streamAudio";
import fsPromises from 'fs/promises';
import fs from 'fs';

(async function () {
    if (!process.argv[2] || !process.argv[3] || !process.argv[4]) {
        console.log('Use:\nytDownloadAudio [path] [videoId] [outputFileName]')
        return
    }
    const filePath = `${process.argv[2]}/${process.argv[4]}.mp3`
    await fsPromises.writeFile(filePath, '')
    const fileStream = fs.createWriteStream(filePath)
    await streamAudio(process.argv[3], fileStream)
})()
