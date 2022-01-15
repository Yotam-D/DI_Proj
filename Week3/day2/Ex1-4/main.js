//Ex1
let favoritFood = "Taco"
let favoriteMeal = "lunch";
console.log('Ex1 - I eat ' + favoritFood + ' for ' + favoriteMeal + ' every day');

//Ex2
let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
let watchedSeriesLength = watchedSeries.length;
let myWatchedSeries = watchedSeries.join(", ");
console.log('I watched ' +watchedSeriesLength+ ' serieses: '+ myWatchedSeries);
//partII
watchedSeries[2] = 'friends';
watchedSeries.push('how I met your mother');
watchedSeries.unshift('Dr house');
watchedSeries.splice(1,1);
console.log(watchedSeries);
console.log(watchedSeries[1][2]);


//Ex3
let degCel = 30;
degFar = degCel / 5 * 9 - 32;
console.log(degCel + '°C is '+ degFar +'°F');
