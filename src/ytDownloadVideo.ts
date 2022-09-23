#! /usr/bin/env node

import streamVideo from "./utilities/streamVideo";
import fsPromises from 'fs/promises';
import fs from 'fs';

(async function () {
    if (!process.argv[2] || !process.argv[3] || !process.argv[4]) {
        console.log('Use:\nytDownloadVideo [path] [videoId] [outputFileName]')
        return
    }
    const filePath = `${process.argv[2]}/${process.argv[4]}.mp4`
    await fsPromises.writeFile(filePath, '')
    const fileStream = fs.createWriteStream(filePath)
    await streamVideo(process.argv[3], fileStream)
})()
