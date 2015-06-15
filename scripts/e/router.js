/**
 * Created by firewaterjoe on 6/15/15.
 */
import {AllBlogs} from './view/eView';
import {BlogCollection} from './models/eModels';

var Router = Backbone.Router.extend({
    routes: {
        'e': 'blogIndex',
        'e/create': 'newBlog',
        'e/edit/:id': 'editBlog',
        'e/:id': 'blogShow'
    },
    initialize: function(){
        this.blogCollection = new BlogCollection();

    },
    blogIndex: function(){
        $('#app').html(new AllBlogs({model: this.blogCollection}).el);
    },
    newBlog: function(){

    },
    blogShow: function(){

    },
    editBlog: function(){

    }
});

export default new Router()