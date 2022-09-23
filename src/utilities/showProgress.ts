import { totalmem } from "os";
import internal from "stream";

const showProgress = (stream: internal.Readable) => {
    const cols: number = process.stdout.columns
    let currentDots: number = 0

    stream.on('progress', (chunk: number, down: number, total: number) => {
        if (!currentDots) console.log(`Downloading ${total} bytes of data.`)
        const newDots = Math.ceil(down / total * cols);
        const dotsToAdd = newDots - currentDots

        for (let i = 0; i < dotsToAdd; i++)
            process.stdout.write('.')

        currentDots = newDots
    })
}

export default showProgress;