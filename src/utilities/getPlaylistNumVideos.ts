import { get } from '../controllers/Client'
import Generic from './Generic'

const getPlaylistNumVideos = async (id: string): Promise<number> => {
    const response = JSON.parse(await get({
        host: 'www.googleapis.com',
        path: '/youtube/v3/playlistItems',
        qs: {
            key: process.env.YOUTUBE_API_KEY,
            part: 'contentDetails',
            playlistId: id
        } as Generic
    }));

    return parseInt(response.pageInfo.totalResults)
}

export default getPlaylistNumVideos