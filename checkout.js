function checkout(items){

    if (items.length == 0){
        return 0
    }

const dictionary = {
    "A": {"price": 50, "offer": {"items": 3, "price": 140}},
    "B": {"price": 35, "offer": {"items": 2, "price": 60}},
    "C": {"price": 25},
    "D": {"price": 12}
}

const prices = items.map((item)=>{
    let remainingItems = item.quantity;
    let discountedTotal = 0;
    const lookup = dictionary[item.code];
    if (lookup.hasOwnProperty("offer")){
        if (item.quantity >= lookup.offer.items){
            const discounts = Math.floor(item.quantity/lookup.offer.items);
            const discountedItems = discounts*lookup.offer.items;
            remainingItems -= discountedItems;
            discountedTotal = lookup.offer.price * discounts
        }
    }
    return (lookup.price * remainingItems) + discountedTotal;
})

const total = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  return total;
}

module.exports = checkout;