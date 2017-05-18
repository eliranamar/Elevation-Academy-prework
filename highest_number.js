var array = [4, 6, 2, 7, 8, 2];

function highest(arr){
  var high = arr[0];

  for (var i = 1; i < arr.length; i++){
    if (arr[i] > high){
      high = arr[i];
    }
  }
  console.log("highest number is " + high);
}
highest(array);
