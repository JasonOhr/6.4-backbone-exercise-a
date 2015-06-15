/**
 * Created by firewaterjoe on 6/15/15.
 */
var Blog = Backbone.Model.extend({
   idAttribute: '_id',
    toJSON: function(){
        return _.extend({}, _.omit(this.attributes,'_id'),{
            id: this.id
        })
    },
    defaults: function(){
        return{
            created_on: new Date()
        }
    }
});
var BlogCollection = Backbone.Collection.extend({
   model: Blog,
    url: 'http://tiny-lasagna-server.herokuapp.com/collections/jason_blogs'
});
export default {Blog, BlogCollection};