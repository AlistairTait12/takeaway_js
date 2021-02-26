$(document).ready(function() {
  var cart = new Cart();
  var peperoni = new Dish("Peperoni", 800, "Peperoni slices, cheese, tomato base");
  var bbqChicken = new Dish("BBQ Chicken", 850, "Chicken, peppers, onions, BBQ base");
  var tomatoAndBasil = new Dish("Tomato and Basil", 650, "Tomato and Basil");

  var menu = [peperoni, bbqChicken, tomatoAndBasil];

  displayInfo(peperoni);
  displayInfo(bbqChicken);
  displayInfo(tomatoAndBasil);

  function displayInfo(item) {
    $('#' + item.name.replace(/\s+/g, '') + 'Header').text(item.name);
    $('#' + item.name.replace(/\s+/g, '') + 'Descr').text(item.description);
    $('#' + item.name.replace(/\s+/g, '') + 'Price').text(item.displayPrice());
  };
});