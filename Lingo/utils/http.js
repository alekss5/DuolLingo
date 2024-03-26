import axios from 'axios';

const baseURL = 'http://localhost:8080/'

const api = axios.create({
    baseURL,
})

export const fetchFeed = async ()=> {
    try{

        const feed = await api.get('feed/')
        return feed.data
    }catch(e){
        console.log(e.message)

    }
}