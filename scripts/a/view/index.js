/**
 * Created by firewaterjoe on 6/11/15.
 */
var View =Backbone.View.extend({
    template: JST.aIndex,
    events: {
      'submit': 'postMessage'
    },
    initialize: function(){
      this.render();
    },

    render: function(){
        this.$el.html(this.template());
    },
    postMessage: function(e){
        e.preventDefault();

        this.collection.create({

            title: $('.title').val(),
            content: $('.content').val(),

        });
        this.clearContent();
    },
    clearContent: function(){
        $('.content').val('');
        $('.title').val('');
    }
});
export default View;