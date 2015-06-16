/**
 * Created by firewaterjoe on 6/15/15.
 */

var AllBlogs = Backbone.View.extend ({
    template: JST.the_blogs,
    events : {
        'click .delete-blog': 'deleteBlog'
    },
    initialize: function(){

        this.listenTo(this.collection, 'update', this.fetchRender );
        this.render();
    },
    render: function(){

        this.$el.html(this.template(this.collection.toJSON()))
    },
    blogSelected: function(e){
        e.preventDefault();
        var blog = $('.blog-single');
        var dude = $(e.target).closest(blog).attr('id');
    },
    deleteBlog: function(e){
        e.preventDefault();
        var blog = $('.blog-single');
        this.model = this.collection.get($(e.target).closest(blog).attr('id'));
        this.model.destroy();

        //console.log(this.model);
    },
    fetchRender: function(){
        this.collection.fetch().then(function(){
            this.render();
        }.bind(this));
    }
});

var SingleBlog = Backbone.View.extend ({
    template: JST.single_blog,
    initialize: function(){
        this.render()
    },
    render: function(){
        console.log(this.model);
        this.$el.html(this.template(this.model.toJSON()));
    }
});

var CreateBlog = Backbone.View.extend({
    template: JST.blog_form,
    events:{
      'submit': 'postBlog'
    },

    initialize: function(){

        this.render();
    },
    render: function(){
        this.$el.html(this.template())
    },
    postBlog: function(e){
        e.preventDefault();
        console.log('what up');
        this.collection.create({
            title: $('.title').val(),
            content: $('.content').val()
        });
        this.clearContent();
    },
    clearContent: function(){
        $('.title').val('');
        $('.content').val('');
    }
});
var EditBlog = Backbone.View.extend({

});

export default {AllBlogs, SingleBlog, CreateBlog, EditBlog};