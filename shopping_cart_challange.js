var shoppingCart = [];
function addToCart(name, price) {
  for (var i = 0; i < shoppingCart.length; i++) {
    if (name === shoppingCart[i].name) {
      console.log(name +" item Already Exist!");
      return;
    }
  }
  var temp = {
    name: name,
    price: price
  };
  shoppingCart.push(temp);
}

function priceCheck(item) {
  for(var i = 0; i<shoppingCart.length; i++) {
    if (item === shoppingCart[i].name){
      console.log(item + " cost is " + shoppingCart[i].price + " Shekels.");
      return;
    }
  }
  console.log("the searched item is not in the shopping cart array!");
}

function totalPriceCheck() {
  var total = 0
  for (var i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price;
  }
  console.log("Total cart price: " + total + " Shekels.");
}

addToCart("Apple", 2);
addToCart("Banana", 3);
addToCart("Milky", 3);
addToCart("Yogurt", 4);
addToCart("Apple", 2);

priceCheck("Apple");

totalPriceCheck();
