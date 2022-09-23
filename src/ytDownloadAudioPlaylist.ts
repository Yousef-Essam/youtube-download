#! /usr/bin/env node

import streamAudio from "./utilities/streamAudio";
import getPlaylistVideosIds from "./utilities/getPlaylistVideosIds";
import fsPromises from 'fs/promises';
import fs from 'fs';

(async function () {
    if (!process.argv[2] || !process.argv[3]) {
        console.log('Use:\nytDownloadAudioPlaylist [path] [playlistId]')
        return
    }
    const ids = await getPlaylistVideosIds(process.argv[3])
    console.log(`Starting Download of ${ids.length} audio files.`)

    for (let i = 0; i < ids.length; i++) {
        const filePath = `${process.argv[2]}/${i + 1}.mp3`
        await fsPromises.writeFile(filePath, '')
        const fileStream = fs.createWriteStream(filePath)
        await streamAudio(ids[i], fileStream)
    }
})()
