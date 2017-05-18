var myArray = [4, 6, 8, 3, 4, 7, 8, 2, 4];
var number = 0;
var counter = 0;


function occur(arr) {
  for (var i = 0; i < arr.length; i++) {
    var tempCounter = 0;
    var tempNumber = arr[i];
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === tempNumber){
        tempCounter++;
      }
    }
    if (tempCounter > counter){
      number = tempNumber;
      counter = tempCounter;
    }
  }
  console.log("greatest occuring number is " + number + " and it occurs " + counter + " times");
}

occur(myArray);
