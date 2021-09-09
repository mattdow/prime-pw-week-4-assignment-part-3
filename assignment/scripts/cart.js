console.log('***** Cart Functions *****');

let basket = [];
const maxItems = 5;

function addItem(item){
  if (!isFull(basket)) { // stretch goal checking for maxItems using isFull
    basket.push(item); // push adds the item to the end of the array
    return true; // per the README, the function returns true for verification
  } else return false;
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

function empty(){ //generalizing for arrays other than basket
  basket = [];
  return false;
}

console.log('Emptying the basket (expect false)', empty());
console.log(`Basket is now ${basket}`);
console.log('Testing full list of items', listItems(basket));

// Moving on to maxItems


// Adding back the items in the list
console.log('Adding yogurt (expect true)', addItem('yogurt'));
console.log('Adding sriracha (expect true)', addItem('sriracha'));
console.log('Adding peaches (expect true)', addItem('peaches'));
console.log(`Basket is now ${basket}`);

function isFull(basketArray) {
  return basketArray.length >= maxItems; // should only require one line to compare the basket with maxItems
}

//Testing isFull

console.log('Testing isFull with 3 items, should be false', isFull(basket));
console.log('Adding pita chips (expect true)', addItem('pita chips'));
console.log('Adding salad (expect true)', addItem('salad'));
console.log('Testing isFull with 5 items, should be true', isFull(basket));
console.log('Adding salsa (expect false)', addItem('salsa')); // testing isFull condition in addItems
