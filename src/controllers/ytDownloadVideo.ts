import prompt from "../utilities/prompt";
import streamVideo from "../utilities/streamVideo";
import fsPromises from 'fs/promises';
import fs from 'fs';
import pathExists from "../utilities/pathExists";
import videoExists from "../utilities/videoExists";

const ytDownloadVideo = async () => {
    let path, videoId;
    while (true) {
        path = await prompt('Enter the path of the folder to download the file: ');
        if (await pathExists(path)) break;
        console.log('This path does not exist.')
    }

    while (true) {
        videoId = await prompt('Enter the id of the video to download: ');
        if (await videoExists(videoId)) break;
        console.log('This video does not exist.')
    }
    
    const filename = await prompt('Enter the name to give to the video file: ');

    const filePath = `${path}/${filename}.mp4`
    await fsPromises.writeFile(filePath, '')
    const fileStream = fs.createWriteStream(filePath)
    await streamVideo(videoId, fileStream)
}

export default ytDownloadVideo