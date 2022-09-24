import prompt from "../utilities/prompt";
import streamVideo from "../utilities/streamVideo";
import fsPromises from 'fs/promises';
import fs from 'fs';

const ytDownloadVideo = async () => {
    const path = await prompt('Enter the path of the folder to download the file: ');
    const videoId = await prompt('Enter the id of the video to download: ');
    const filename = await prompt('Enter the name to give to the video file: ');

    const filePath = `${path}/${filename}.mp4`
    await fsPromises.writeFile(filePath, '')
    const fileStream = fs.createWriteStream(filePath)
    await streamVideo(videoId, fileStream)
}

export default ytDownloadVideo