/**
 * Created by firewaterjoe on 6/15/15.
 */
import {AllBlogs,SingleBlog,CreateBlog} from './view/eView';
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
        //this.blogCollectionPromise = this.blogCollection.fetch();
        this.blogCollection.fetch();

    },
    blogIndex: function(){
        //this.blogCollectionPromise.then(function(){
        //    console.log('collection',this.blogCollectionPromise);
        //    $('#app').html(new AllBlogs({collection: this.blogCollectionPromise}).el);
        //
        //}.bind(this))
        this.blogCollection.fetch().then(function(){
            console.log('collection',this.blogCollection);
            $('#app').html(new AllBlogs({collection: this.blogCollection}).el);
        }.bind(this));

    },
    newBlog: function(){
        this.blogCollection.fetch().then(function(){
            $('#app').html(new CreateBlog({collection: this.blogCollection}).el);

        }.bind(this));
    },
    blogShow: function(id){

        this.blogCollection.fetch().then(function(){
            this.model = this.blogCollection.get(id);
            $('#app').html(new SingleBlog({model:this.model}).el);
        }.bind(this));



    },
    editBlog: function(){

    }
});

export default new Router()