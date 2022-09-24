import prompt from "../utilities/prompt";
import streamAudio from "../utilities/streamAudio";
import getPlaylistVideosIds from "../utilities/getPlaylistVideosIds";
import fsPromises from 'fs/promises';
import fs from 'fs';
import pathExists from "../utilities/pathExists";
import playlistExists from "../utilities/playlistExists";

const ytDownloadAudioPlaylist = async () => {
    let path, playlistId;
    while (true) {
        path = await prompt('Enter the path of the folder to download the file: ');
        if (await pathExists(path)) break;
        console.log('This path does not exist.')
    }

    while (true) {
        playlistId = await prompt('Enter the id of the playlist to download: ');
        if (await playlistExists(playlistId)) break;
        console.log('This playlist does not exist.')
    }

    const ids = await getPlaylistVideosIds(playlistId)
    console.log(`Starting Download of ${ids.length} audio files.`)

    for (let i = 0; i < ids.length; i++) {
        const filePath = `${path}/${i + 1}.mp3`
        await fsPromises.writeFile(filePath, '')
        const fileStream = fs.createWriteStream(filePath)
        await streamAudio(ids[i], fileStream)
    }
}

export default ytDownloadAudioPlaylist
