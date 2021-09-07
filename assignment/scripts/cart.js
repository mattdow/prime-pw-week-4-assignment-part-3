console.log('***** Cart Functions *****');

let basket = [];
function addItem(item){
  basket.push(item);
  return true;
} // end addItem function

console.log(`Basket is now ${basket}`);
console.log('Adding yogurt (expect true)', addItem('yogurt'));
console.log(`Basket is now ${basket}`);
console.log('Adding sriracha (expect true)', addItem('sriracha'));
console.log(`Basket is now ${basket}`);

function listItems(){
  for (item in basket){
    console.log(basket[item]);
  } // end of loop of basket items
} //  end of listItems

listItems();
console.log('Adding peaches (expect true)', addItem('peaches'));
listItems();
console.log(`Basket is now ${basket}`);

function empty(){
  basket = [];
  return false;
}

console.log('Emptying the basket (expect false)', empty());
console.log(`Basket is now ${basket}`);
console.log('Testing full list of items', listItems());
