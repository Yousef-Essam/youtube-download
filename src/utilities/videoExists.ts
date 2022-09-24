import { get } from '../controllers/Client'

const videoExists = async (videoId: string): Promise<boolean> => {
    if (!videoId) return false;
    const res = JSON.parse(await get({
        host: 'www.googleapis.com',
        path: '/youtube/v3/videos',
        qs: {
            key: process.env.YOUTUBE_API_KEY,
            part: 'id',
            id: videoId,
            maxResults: 1
        }
    }))

    return res.pageInfo.totalResults !== 0;
}

export default videoExists;