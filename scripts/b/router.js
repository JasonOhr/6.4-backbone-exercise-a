/**
 * Created by firewaterjoe on 6/11/15.
 */
//first name, last name, address, and phone number
import BView from './view/bView';
import PeopleCollection from './models/bModel'
var Router = Backbone.Router.extend({
    routes:{
        'b': 'createPerson'
    },
    initialize: function(){
      this.people = new PeopleCollection();
        console.log(this.people);
    },
    createPerson: function(){
        this.people.fetch();

        $('#app').html( new BView({collection: this.people}).el);
    }
});

export default new Router();