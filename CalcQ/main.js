function getTotalQuantityOfCartItems(items) {
    let totalQuantity = 0;
  
    items.forEach(item => {
      totalQuantity += item.quantity;
    });
  
    return totalQuantity;
  }
  
  const items = [
    { name: 'Redbull', price: 2.5, quantity: 4 },
    { name: 'Votka', price: 25, quantity: 2 },
    { name: 'Chips', price: 2.5, quantity: 4 }
  ];
  
  const totalQuantity = getTotalQuantityOfCartItems(items);
  console.log('Ukupno proizvoda:', totalQuantity);
  