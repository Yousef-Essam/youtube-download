import { get } from '../controllers/Client'
import dotenv from 'dotenv';
import getPlaylistNumVideos from './getPlaylistNumVideos';
import Generic from './Generic';

dotenv.config({path: 'C:/.env'});

const getPlaylistVideoIds = async (id: string): Promise<string[]> => {
    let ids: string[] = [];

    const numVideos = await getPlaylistNumVideos(id)
    let nextPageToken: string = ''
    let options = {
        host: 'www.googleapis.com',
        path: '/youtube/v3/playlistItems',
        qs: {
            key: process.env.YOUTUBE_API_KEY,
            part: 'contentDetails',
            playlistId: id
        } as Generic
    }

    while (ids.length !== numVideos) {
        if (nextPageToken) options.qs.pageToken = nextPageToken

        const page = JSON.parse(await get(options))
        ids = [...ids, ...page.items.map((val: Generic) => val.contentDetails.videoId)]

        nextPageToken = page.nextPageToken || ''
    }

    return ids;
}

export default getPlaylistVideoIds;