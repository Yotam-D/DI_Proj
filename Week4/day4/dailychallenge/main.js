let beers = parseInt(prompt('Enter number of beers:'));
let toSub = 1;
while(beers > 0){
  if (toSub == 1){
    console.log(`${beers} bottles of beer on the wall \n${beers} bottles of beer \nTake ${toSub} down, pass it around \n${beers - toSub} bottles of beer on the wall`);
  }else {
    console.log(`${beers} bottles of beer on the wall \n${beers} bottles of beer \nTake ${toSub} down, pass them around \n${beers - toSub} bottles of beer on the wall`);
  }
  beers -= toSub;
  toSub++;
}
console.log('0 bottle of beer on the wall” or “no bottle of beer on the wall');
