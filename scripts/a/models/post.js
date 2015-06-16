/**
 * Created by firewaterjoe on 6/11/15.
 */
var APost = Backbone.Model.extend({
   idAttribute: '_id',
   urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/jason_blogs',
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
   url: 'http://tiny-lasagna-server.herokuapp.com/collections/jason_blogs',
   model: APost
});

export default APostsCollection;
