var Backbone = require('backbone');
var $ = require('jquery');

var Pizza = Backbone.Model.extend({

});

var PizzaCollection = Backbone.Collection.extend({
  model: Pizza,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mypizza',
});

module.exports = {
  Pizza: Pizza,
  PizzaCollection: PizzaCollection
};
