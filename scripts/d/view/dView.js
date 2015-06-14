/**
 * Created by firewaterjoe on 6/14/15.
 */
var SidebarView =  Backbone.View.extend({
   template: JST.dSidebar,
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log('cView collection :',this.collection);
        this.$el.html(this.template(this.collection.toJSON()))
    }
});

var BlogContentView = Backbone.View.extend({
    template: JST.dTemp,
    initialize: function(){
        this.render();
    },
    render: function () {
        this.$el.html(this.template(
            (this.model.toJSON())
        ));
    }
});
var TagsForm = Backbone.View.extend({
    template: JST.tagForm,
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    }
});

export default {SidebarView, BlogContentView,TagsForm}