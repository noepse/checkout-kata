function checkout(items) {

  if (!Array.isArray(items)){
      throw new Error("Error: Parameter is not an array!");
  }

  const dictionary = {
    A: { price: 50, offer: { items: 3, price: 140 } },
    B: { price: 35, offer: { items: 2, price: 60 } },
    C: { price: 25 },
    D: { price: 12 },
  };

  let total = 0;

  items.forEach((item) => {
    let remainingItems = item.quantity;
    const lookup = dictionary[item.code];
    if (lookup.hasOwnProperty("offer")) {
      if (item.quantity >= lookup.offer.items) {
        const discounts = Math.floor(item.quantity / lookup.offer.items);
        const discountedItems = discounts * lookup.offer.items;
        remainingItems -= discountedItems;
        total += lookup.offer.price * discounts;
      }
    }
    total += lookup.price * remainingItems;
  });

  return total;
}

module.exports = checkout;
