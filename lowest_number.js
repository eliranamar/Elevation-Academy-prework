var array = [5, 6, 2, 4, 9, 3];

function lowest(arr){
  var low = arr[0];

  for (var i = 1; i < arr.length; i++){
    if (arr[i] < low){
      low = arr[i];
    }
  }
  console.log("lowest number is " + low);
}
lowest(array);
