import ytdl from 'ytdl-core'
import { Writable } from "stream";
import showProgress from './showProgress';

const streamAudio = (videoId: string, res: Writable) => {
    return new Promise((resolve: Function, reject: Function) => {
        try {
            const audioStream = ytdl(`http://youtube.com/watch?v=${videoId}`, { filter: 'audioonly', quality: 'lowestaudio' })
            showProgress(audioStream)
            audioStream.on('data', (data) => {
                res.write(data)
            })
        
            audioStream.on('finish', () => {
                res.end()
                resolve(res)
            })
        
          } catch (err) {
            reject(err)
          }
    })
}

export default streamAudio;