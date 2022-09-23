import http from 'http';
import https from 'https';
import Generic from '../utilities/Generic';

export interface Options  {
    host: string,
    path: string,
    qs?: Generic
};

export const getFullPath = (options: Options) => {
    let fullPath = options.path
    if (options.qs) {
        fullPath += '?';
        let arr: string[] = []
        for (let key in options.qs) {
            if (options.qs[key as keyof Object])
                arr.push(`${key}=${options.qs[key as keyof Object]}`)
        }
        fullPath += arr.join('&')
    }
    
    return fullPath;
}

export const get = (reqOptions: Options): Promise<string> => {
    return new Promise((resolve: Function, reject: Function) => {
        try {
            const options = {
                host: reqOptions.host,
                path: getFullPath(reqOptions)
            };

            let str: string = '';

            const req = https.request(options, (res: http.IncomingMessage) => {
                res.on('data', (data: string) => {
                    str += data;
                })

                res.on('end', () => {
                    resolve(str)
                })
            })

            req.on('error', (err: Error) => {
                throw err;
            })

            req.end()
        } catch (err) {
            reject(err);
        }
    })
}