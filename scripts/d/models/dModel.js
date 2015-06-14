/**
 * Created by firewaterjoe on 6/14/15.
 */
var Blog = Backbone.Model.extend({
    idAttribute: '_id',
    tags:[]

});
var BlogCollection = Backbone.Collection.extend({
    model: Blog,
    url: 'http://tiny-lasagna-server.herokuapp.com/collections/jason_blogs'
});

export default {Blog,BlogCollection}