/**
 * Created by firewaterjoe on 6/11/15.
 */
    
import {APostsCollection} from './models/post';
import AView from './view/index';
var Router = Backbone.Router.extend({
   routes:{
       '': 'index'
   },
    initialize: function(){
        this.post = new APostsCollection();
        //this.createPost = new AView();
    },
    index: function(){
        this.post.fetch();
        console.log(this.post);
        $('#app').append(new AView({collection:this.post}).el);
    }

});

export default new Router();