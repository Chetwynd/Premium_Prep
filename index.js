function renderInventory(inventory)
{
  //iterate through inventory to access each item
  for(var index = 0; index < inventory.length; index++)
  {
    var currentObject = inventory[index];
    var currentShoeMaker = currentObject['name'];
    var currentShoeDetailsArray = currentObject['shoes'];
    var currentListArray = [];
    // first add the current shoemaker to our list array
    currentListArray.push(currentShoeMaker);
    // then iterate through the currentShoeNameArray to add the shoes and prices
    for(var shoeIndex = 0; shoeIndex < currentShoeNameArray.length; shoeIndex++)
    {
      var currentShoeName = currentShoeDetailsArray[shoeIndex]['name'];
      var currentShoePrice = currentShoeDetailsArray[shoeIndex]['price'];
      
      currentListArray.push(currentShoeName, currentShoePrice);
    }
  }
}

//Create helper functions if needed