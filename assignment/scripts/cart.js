console.log('***** Cart Functions *****');

let basket = [];

function addItem(item){
  basket.push(item); // push adds the item to the end of the array
  return true; // per the README, the function returns true for verification
} // end addItem function

console.log(`Basket is now ${basket}`);
console.log('Adding yogurt (expect true)', addItem('yogurt'));
console.log(`Basket is now ${basket}`);
console.log('Adding sriracha (expect true)', addItem('sriracha'));
console.log(`Basket is now ${basket}`);

function listItems(basketList){ //making this function generalize for arrays other than basket
  for (item in basketList){ // loop through all items in the array
    console.log(basketList[item]);
  } // end of loop of basket items
} //  end of listItems

listItems(basket);
console.log('Adding peaches (expect true)', addItem('peaches'));
listItems(basket);
console.log(`Basket is now ${basket}`);

function empty(basketArray){ //generalizing for arrays other than basket
  basketArray = [];
  return false;
}

console.log('Emptying the basket (expect false)', empty(basket));
console.log(`Basket is now ${basket}`);
console.log('Testing full list of items', listItems(basket));

// Moving on to maxItems
const maxItems = 5;

console.log('Adding yogurt (expect true)', addItem('yogurt'));
console.log('Adding sriracha (expect true)', addItem('sriracha'));
console.log('Adding peaches (expect true)', addItem('peaches'));
console.log(`Basket is now ${basket}`);
