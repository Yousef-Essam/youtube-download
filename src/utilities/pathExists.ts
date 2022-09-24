import fs from 'fs'

const pathExists = (path: string) => {
    return new Promise((resolve: Function, reject: Function) => {
        fs.stat(path, (err, stat) => {
            if (err) resolve(false)
            else resolve(true)
        })
    })
}

export default pathExists