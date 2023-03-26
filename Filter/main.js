function filterBlueObjects(objects) {

    const blueObjects = objects.filter(object => object.color === 'blue');
    return blueObjects;

  }
  

  const objects = [
    { name: 'Lopta', color: 'blue'},
    { name: 'Peskir', color: 'blue'},
    { name: 'Gidora', color: 'chrome'},
    { name: 'Branik', color: 'gray'},
    
  ];
  
  const blueObjects = filterBlueObjects(objects);
  console.log('Plavi objekti iz liste su:', blueObjects);
  