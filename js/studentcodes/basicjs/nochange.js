// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
//add your code here
  var french=document.getElementById("french").value;
  var coffee=document.getElementById("coffee").value;
  var chip=document.getElementById("chip").value;
  var nfrench = parseInt(french, 10);
  var ncoffee = parseInt(coffee, 10);
  var nchip = parseInt(chip, 10);
// Compute the cost

  document.getElementById("cost").value = 
  totalCost=(nfrench*3.49)+(ncoffee*2.54)+(nchip*1.35)
}  //* end of computeCost
