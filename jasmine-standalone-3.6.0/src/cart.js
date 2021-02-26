class Cart {
  constructor(contents = []) {
    this.contents = contents;
  }

  receive(dish) {
    this.contents.push(dish);
  }

  _totalPrice() {
    let total = 0;
    this.contents.forEach((dish) => {
      total += dish.price;
    });
    return total;
  }

  displayTotalPrice() {
    let priceAsString = this._totalPrice().toString();
    return "£" + priceAsString.substring(0, priceAsString.length - 2) + "." + priceAsString.substring(priceAsString.length - 2);
  }

  displayOrder() {
    let order = {};
    this.contents.forEach((dish) => {
      if(dish.name in order) {
        order[dish.name] += 1;
      } else {
        order[dish.name] = 1;
      }
    });
    order['total'] = this.displayTotalPrice();
    return order;
  }
}
