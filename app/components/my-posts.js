import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class MyPostsComponent extends Component {
    @service('favourite-posts') favPosts;
 
    @action
    addPost(post){
        this.favPosts.add(post);
    }
}
