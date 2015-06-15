/**
 * Created by firewaterjoe on 6/14/15.
 */
var SidebarView =  Backbone.View.extend({
   template: JST.dSidebar,
    initialize: function () {
        this.render();
    },

    render: function () {
        console.log('dView collection :',this.collection);
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
    events:{
        'click .add-tag': 'addTag'
    },
    initialize: function(){
        this.render();
    },
    render: function(){

        this.$el.html(this.template());

    },
    addTag: function(){
        this.newTag = $('.tag-name').val();
        this.tagClone = _.clone(this.model.get('tags'));
        this.tagClone.push(this.newTag);
        this.model.set('tags',this.tagClone);
        this.model.save();



        console.log('tagC : ',this.model);
    }
});
var TagList = Backbone.View.extend({
   //template: JST.tagList,

    initialize: function(){
        this.listenTo(this.model, 'change', this.render);
        this.render();
    },
    render: function(){
        var tagList = this.model.get('tags');
        console.log('tagList1: ',tagList);
        this.$el.html(JST['tagList']({
            tags:tagList
        }));
    }
});

export default {SidebarView, BlogContentView,TagsForm,TagList}