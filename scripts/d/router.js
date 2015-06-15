/**
 * Created by firewaterjoe on 6/14/15.
 */
import {Blog,BlogCollection} from './models/dModel';
import {SidebarView, BlogContentView,TagsForm,TagList} from './view/dView';
var Router = Backbone.Router.extend({
    routes: {
        'd':'showBlogList',
        'd/:id': 'showBlog'
    },
    initialize: function(){
        this.blogCollection = new BlogCollection();
        //this.tagsForm = new TagsForm();
    },
    showBlogList: function(){
        this.blogCollection.fetch().then(function(){
            //this.view = new SidebarView({collection: this.blogCollection});

            $('#app').html(new SidebarView({collection: this.blogCollection}).el);
        }.bind(this));
    },
    showBlog: function (id) {
        this.blogCollection.fetch().then(function(){
            this.model = this.blogCollection.get(id);
            $('.content').html(new BlogContentView({model: this.model}).el)
                .append(new TagsForm({model:this.model}).el)
                .append(new TagList({model:this.model}).el);


        }.bind(this));


    }

});

export default new Router;