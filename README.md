# Youtube Download
- This is a CLI interactive tool to download videos from youtube either in audio format or in video format.
- It can also be used to download entire playlists also in either audio format or video format.

## Setting up the tool
- You must first get a Youtube API Key.
- You should add this key to your system either by:
- - Creating a `.env` file and adding the API key to it under the name `YOUTUBE_API_KEY`. You should add the `.env` file to the home directory of your device. For example: if you are working with Windows, the path to the `.env` file must be `C:/.env`.
- - Adding the API key as a global environment variable called `YOUTUBE_API_KEY`.
- Clone the repository using the following command `git clone https://github.com/Yousef-Essam/youtube-download`.
- Inside the application folder:
- - Install the dependencies using the following command `npm install`
- - Build the application using the following command `npm run build`
- - Install the application using the following command `npm install . -g`
- Now, you are ready to use this tool!

## Using ytDownload
- Inside the command line check that the tool is successfully installed by running the following command: `ytDownload`
- The tool will prompt you to choose whether to download an audio file, a video file or an entire audio or video playlist.
- You will be prompted to enter the path in which the file/playlist will be downloaded in your filesystem and the id of the video/playlist to download.
- Congratulations! You downloaded your first youtube file!

## In future versions:
- You will be able to choose the quality of the video to download.