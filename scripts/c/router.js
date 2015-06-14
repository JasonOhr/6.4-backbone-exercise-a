/**
 * Created by firewaterjoe on 6/12/15.
 */

//=============  router for c  =============

import {SidebarView,BlogContentView} from './view/cView';
import {Blog,BlogCollection} from './models/cModel'
var Router;
Router = Backbone.Router.extend({
    routes: {
        'c': "showBlogList",
        'c/:id': "showBlog"
    },
    initialize: function () {
        this.blogCollection = new BlogCollection();
    },
    showBlogList: function () {

        this.blogCollection.fetch().then(function() {
            this.view = new SidebarView({collection: this.blogCollection});
            $('#app').html(this.view.el);
        }.bind(this));

    },
    showBlog: function (id) {

        this.blogCollection.fetch().then(function(){

            this.model = this.blogCollection.get(id);
            $('.content').html(new BlogContentView({model:this.model}).el)

        }.bind(this));
    }
});

export default new Router();