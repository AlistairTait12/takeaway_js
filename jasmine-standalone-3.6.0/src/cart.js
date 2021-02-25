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
}