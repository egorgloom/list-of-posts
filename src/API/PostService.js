import axios from 'axios';

export default class PostService {
    static async getAll() {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return posts.data
    }
}