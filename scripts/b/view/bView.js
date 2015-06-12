/**
 * Created by firewaterjoe on 6/11/15.
 */

export default Backbone.View.extend({
    template:JST.bTemp,
    events:{
        'submit': 'createPerson'
    },
    initialize: function(){
      this.render();
    },
    render: function(){
        this.$el.html(this.template());
    },
    createPerson: function(e){
        console.log('nuthin');
     e.preventDefault();
        this.collection.create({
            first_name: $('.first-name').val(),
            last_name: $('.last-name').val(),
            address: $('.address').val(),
            phone: $('.phone').val()
        });
        this.clearForm();

    },
    clearForm: function(){
       $('.first-name').val('');
       $('.last-name').val('');
       $('.address').val('');
       $('.phone').val('');
    }
});
