/**
 * Created by firewaterjoe on 6/15/15.
 */

var AllBlogs = Backbone.View.extend ({
    template: JST.the_blogs,
    events : {
        'click .blog-single': 'blogSelected'
    },
    initialize: function(){
        this.render()
    },
    render: function(){
        this.$el.html(this.template())
    },
    blogSelected: function(e){
        e.preventDefault();
        var blog = $('.blog-single');
        var dude = $(e.target).closest(blog).attr('id');



    }
});

var SingleBlog = Backbone.View.extend ({

});

var CreateBlog = Backbone.View.extend({

});
var EditBlog = Backbone.View.extend({

});

export default {AllBlogs, SingleBlog, CreateBlog, EditBlog};