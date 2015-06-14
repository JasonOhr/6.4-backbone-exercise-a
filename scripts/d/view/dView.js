/**
 * Created by firewaterjoe on 6/14/15.
 */
var SidebarView =  Backbone.View.extend({
   template: JST.cSidebar,
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log('cView collection :',this.collection);
        this.$el.html(this.template(this.collection.toJSON()))
    }
});

var BlogContentView = Backbone.View.extend({
    template: JST.cTemp,
    initialize: function(){
        this.render();
    },
    render: function () {
        this.$el.html(this.template(
            (this.model.toJSON())
        ));
    }
});

export default {SidebarView, BlogContentView}