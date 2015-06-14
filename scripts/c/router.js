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
        this.blogView = new Blog();
    },
    showBlogList: function () {

        this.blogCollection.fetch().then(function() {
            console.log('this is bs');
            this.view = new SidebarView({collection: this.blogCollection});
            console.log('collection: blogCollection >', this.blogCollection);
            console.log('view returned: view.el >', this.view.el);
            $('#app').html(this.view.el);


        }.bind(this));

    },
    showBlog: function (id) {

        this.blogCollection.fetch().then(function(){
            console.log(id);

            this.model = this.blogCollection.get(id);
            console.log('collection',this.blogCollection.get(id));
            //$('#sidebar').append(new BlogContentView({model: this.blogView}))
            $('.content').html(new BlogContentView({model:this.model}).el)

        }.bind(this));
    }
});

export default new Router();