#! /usr/bin/env node

import prompt from "./utilities/prompt"
import ytDownloadAudio from "./controllers/ytDownloadAudio";
import ytDownloadAudioPlaylist from "./controllers/ytDownloadAudioPlaylist";
import ytDownloadVideo from "./controllers/ytDownloadVideo";
import ytDownloadVideoPlaylist from "./controllers/ytDownloadVideoPlaylist";

(async function () {
    let exit = false;
    while (!exit) {
        exit = true

        const input = await prompt(`Choose the mode of download:\n1.Audio\n2.Audio Playlist\n3.Video\n4.Video Playlist\n\nChoice: `)

        switch (input) {
            case '1':
                await ytDownloadAudio();
                break;
            case '2':
                await ytDownloadAudioPlaylist();
                break;
            case '3':
                await ytDownloadVideo();
                break;
            case '4':
                await ytDownloadVideoPlaylist();
                break;
            default:
                exit = false;
        }
    }
})()