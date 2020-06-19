import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
    async model(){
        let response = await fetch('http://jsonplaceholder.typicode.com/posts/?_limit=10');
        let postData = await response.json();
        return postData;
    }
}