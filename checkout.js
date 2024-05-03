function checkout(items) {

  // unsure if error handling is required for this task - have included it for completeness!
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

  items.forEach((item, index) => {

    // rest of error handling
    if (!item.hasOwnProperty("quantity")){
      throw new Error(`Error: Item at ${index} index does not have quantity property!`);
    }
    if (!item.hasOwnProperty("code")){
      throw new Error(`Error: Item at ${index} index does not have code property!`);
    }
    if (!dictionary.hasOwnProperty(item.code)){
      throw new Error(`Error: Item at ${index} index has an unknown code value!`);
    }
    if (item.quantity < 0){
      throw new Error(`Error: Item at ${index} index has a quantity below zero!`);
    }
    if (!Number.isInteger((item.quantity))){
      throw new Error(`Error: Item at ${index} index is not an integer!`);
    }

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
