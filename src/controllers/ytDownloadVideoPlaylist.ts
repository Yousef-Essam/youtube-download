import prompt from "../utilities/prompt";
import streamVideo from "../utilities/streamVideo";
import getPlaylistVideosIds from "../utilities/getPlaylistVideosIds";
import fsPromises from 'fs/promises';
import fs from 'fs';

const ytDownloadVideoPlaylist = async () => {
    const path = await prompt('Enter the path of the folder to download the files: ');
    const playlistId = await prompt('Enter the id of the playlist to download: ');

    const ids = await getPlaylistVideosIds(playlistId)
    console.log(`Starting Download of ${ids.length} videos.`)

    for (let i = 0; i < ids.length; i++) {
        const filePath = `${path}/${i + 1}.mp4`
        await fsPromises.writeFile(filePath, '')
        const fileStream = fs.createWriteStream(filePath)
        await streamVideo(ids[i], fileStream)
    }
}

export default ytDownloadVideoPlaylist