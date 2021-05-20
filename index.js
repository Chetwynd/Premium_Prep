function transformEmployeeData(employeeData) {
  var array = [];
 //need to get to each element in the array
 for(var index = 0; index < employeeData.length; index++)
 {
   //create a new object for each new row or employee
   var newObject = {};

   for(var secondIndex = 0; secondIndex < employeeData[index].length; secondIndex++)
   {
     for(var thirdIndex = 0; thirdIndex < employeeData[index][secondIndex].length;thirdIndex+=2 )
     {
      // for the first object
      var currentKey = employeeData[index][secondIndex][thirdIndex];
      var currentValue = employeeData[index][secondIndex][thirdIndex + 1];
      
     newObject[currentKey] = currentValue;
     }
   }
   array.push(newObject);
 }
 return array;
}