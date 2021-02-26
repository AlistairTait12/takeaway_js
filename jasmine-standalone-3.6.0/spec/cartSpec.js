describe('Cart', function() {
  
  var cart;

  var dish = {name: "Kiev", price: 800, displayPrice() {return "£8.00"}};
  var dish2 = {name: "Four Seasons", price: 800, displayPrice() {return "£8.00"}};
  var dish3 = {name: "Margherita", price: 650, displayPrice() {return "£6.50"}};

  beforeEach(function() {
    cart = new Cart();
  });
  
  it('starts as empty', function() {
    expect(cart.contents).toEqual([]);
  });

  it('can receive an item', function() {
    cart.receive(dish);
    expect(cart.contents[0].name).toEqual("Kiev");
    expect(cart.contents[0].displayPrice()).toEqual("£8.00");
  });

  it('totals up the contents of the cart', function() {
    cart.receive(dish);
    cart.receive(dish2);
    cart.receive(dish3);
    expect(cart.displayTotalPrice()).toEqual("£22.50");
  });

  it('displays names of dishes and their quantities', function() {
    for (let i = 0; i < 5; i++) {
      cart.receive(dish);
    }

    for (let i = 0; i < 3; i++) {
      cart.receive(dish3);
    }
    console.log(cart.displayOrder());
    expect(cart.displayOrder()).toEqual({Kiev: 5, Margherita: 3, total: "£59.50"});
  });

});
