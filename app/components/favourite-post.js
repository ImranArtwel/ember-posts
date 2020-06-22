import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default class FavouritePost extends Component{
    @service('favouritePosts') favPosts;
}
