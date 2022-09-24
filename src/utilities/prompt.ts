import readline from 'readline';

const prompt = (promptMessage: string = ''): Promise<string> => {
    return new Promise((resolve: Function, reject: Function) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
          
        rl.question(promptMessage, (input: string) => {
            resolve(input)
            rl.close()
        });
    })
}

export default prompt;