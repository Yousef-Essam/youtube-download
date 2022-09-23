import ytdl from 'ytdl-core'
import { Writable } from "stream";
import showProgress from './showProgress';

const streamVideo = (videoId: string, res: Writable) => {
    return new Promise((resolve: Function, reject: Function) => {
        try {
            const videoStream = ytdl(`http://youtube.com/watch?v=${videoId}`)
            showProgress(videoStream)
            videoStream.on('data', (data) => {
                res.write(data)
            })
        
            videoStream.on('finish', () => {
                res.end()
                resolve(res)
            })
        
          } catch (err) {
            reject(err)
          }
    })
}

export default streamVideo;