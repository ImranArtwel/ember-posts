import { A } from '@ember/array';
import Service from '@ember/service';

export default class FavouritePostsService extends Service {
    posts = A([]);
    postIds = {};
    add(post){
      if( !(post.id in this.postIds)){
        this.posts.pushObject(post);
        this.postIds[post.id] = true;
      }
        
    }

    remove(post){
        this.posts.removeObject(post);
    }

    clear() {
        this.posts.clear();
    }

}
