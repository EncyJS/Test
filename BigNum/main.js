function findBiggestNumber(numbers) {
    let biggestNumber = numbers[0];
    let i;
  
    for ( i = 1; i < numbers.length; i++) {
      if (numbers[i] > biggestNumber) {
        biggestNumber = numbers[i];
      }
    }
  
    return biggestNumber;
  }
  
  const numbers = [7, 45, 14, 96, 32];
  const biggestNumber = findBiggestNumber(numbers);
  console.log('Najveći broj liste je:', biggestNumber);
  