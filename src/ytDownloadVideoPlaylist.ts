#! /usr/bin/env node

import streamVideo from "./utilities/streamVideo";
import getPlaylistVideosIds from "./utilities/getPlaylistVideosIds";
import fsPromises from 'fs/promises';
import fs from 'fs';

(async function () {
    if (!process.argv[2] || !process.argv[3]) {
        console.log('Use:\nytDownloadVideoPlaylist [path] [playlistId]')
        return
    }
    const ids = await getPlaylistVideosIds(process.argv[3])
    console.log(`Starting Download of ${ids.length} videos.`)

    for (let i = 0; i < ids.length; i++) {
        const filePath = `${process.argv[2]}/${i + 1}.mp4`
        await fsPromises.writeFile(filePath, '')
        const fileStream = fs.createWriteStream(filePath)
        await streamVideo(ids[i], fileStream)
    }
})()
