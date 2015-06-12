/**
 * Created by firewaterjoe on 6/11/15.
 */
var APost = Backbone.Model.extend({
   idAttribute: '_id',
   urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/jason_o',
   defaults: function(){
      return{

         'title': "",
          'content': "",
          'created_on': new Date()
      }
   }
});

var APostsCollection =  Backbone.Collection.extend({
   idAttribute: '_id',
   url: 'http://tiny-lasagna-server.herokuapp.com/collections/jason_o',
   model: APost
});

export default {APost, APostsCollection};
