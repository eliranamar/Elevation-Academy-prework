var bank = 15000;
var wallet = 100;

function withdraw(amount) {
  if (bank === 0) {
    console.log("bank empty");
  } else {
    wallet += amount;
    bank -= amount;
  }
}

function deposit(amount) {
  if (wallet === 0) {
    console.log("wallet ");
  } else {
    wallet -= amount;
    bank += amount;
  }
}
