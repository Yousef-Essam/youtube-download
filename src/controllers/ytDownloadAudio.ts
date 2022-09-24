import prompt from "../utilities/prompt";
import streamAudio from "../utilities/streamAudio";
import fsPromises from 'fs/promises';
import fs from 'fs';

const ytDownloadAudio = async () => {
    const path = await prompt('Enter the path of the folder to download the file: ');
    const videoId = await prompt('Enter the id of the video to download: ');
    const filename = await prompt('Enter the name to give to the audio file: ');

    const filePath = `${path}/${filename}.mp3`
    await fsPromises.writeFile(filePath, '')
    const fileStream = fs.createWriteStream(filePath)
    await streamAudio(videoId, fileStream)
}

export default ytDownloadAudio
