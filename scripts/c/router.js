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

        this.view = new SidebarView({collection: this.blogCollection});
        console.log('collection: blogCollection >',this.blogCollection);
        console.log('view returned: view.el >', this.view.el);
        $('#app').html(this.view.el);
        this.blogCollection.fetch();
    },
    showBlog: function (id) {
        //console.log(id);
    }
});

export default new Router();