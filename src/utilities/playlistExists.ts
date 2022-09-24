import { get } from '../controllers/Client'

const playlistExists = async (id: string): Promise<boolean> => {
    if (!id) return false
    const res = JSON.parse(await get({
        host: 'www.googleapis.com',
        path: '/youtube/v3/playlistItems',
        qs: {
            key: process.env.YOUTUBE_API_KEY,
            part: 'id',
            playlistId: id,
            maxResults: 1
        }
    }))

    return 'pageInfo' in res
}

export default playlistExists;