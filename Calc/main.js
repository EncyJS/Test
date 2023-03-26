function getTotalPriceOfCartItems(items) {
    let totalPrice = 0;
  
    items.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
  
    return totalPrice;
  }
  
  const items = [
    { name: 'RedBull', price: 2.5, quantity: 2 },
    { name: 'Votka', price: 25, quantity: 2 },
    { name: 'Chips', price: 2.5, quantity: 4 }
  ];
  
  const totalPrice = getTotalPriceOfCartItems(items);
  console.log('Ukupna cijena:', totalPrice);
  