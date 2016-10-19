var Backbone = require('backbone');
var $ = require('jquery');
var Pizza = require('./models/models').Pizza;
var PizzaCollection = require('./models/models').PizzaCollection;

var pizzaList = new PizzaCollection();

$('.submit-button').on('click', function(){
  pizzaList.on('add', function(item){ //does the same thing as the each iterator below
   $('.pizza-list').append('<li>' + item.attributes.name + '</li>');
 });
  $('.submit-text').html('Loading...').prop('disabled', true);
  pizzaList.fetch().then(function(){
    $('.submit-text').html('Submit').prop('disabled', false);
    console.log(pizzaList);
  });
});

// creating new pizza on 'click' of submit
$('.post-button').on('click', function(){
  //set textbox values equal to variables
  var newType = $('.type').val();
  var newIngredient = $('.ingredients').val();
  var newName = $('.name').val();
  //create a new object in the pizzaList collection with the values from the text boxes
  pizzaList.create({name: newName, type : newType, ingredients : newIngredient});
  console.log(pizzaList);
  //clear text boxes after the post
  $('.type').val('');
  $('.ingredients').val('');
  $('.name').val('');
})
