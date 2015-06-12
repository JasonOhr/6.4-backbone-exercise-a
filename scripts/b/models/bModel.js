/**
 * Created by firewaterjoe on 6/11/15.
 */
var Person = Backbone.Model.extend({
    idAttribute: '_id',
   defaults: function(){
       return{

           first_name: "",
           created_on: new Date()
       }

   }
});
var PeopleCollection = Backbone.Collection.extend({
   model: Person,
    url: 'http://tiny-lasagna-server.herokuapp.com/collections/jason_o'
});

export default PeopleCollection;