function generator(n){

  var counter = n;
  var array = [];
  var orderedArray = [];

  var getRandomNr = function(){
    var randomNr = Math.floor(Math.random()*counter);
    var randomElement = orderedArray.splice(randomNr,1)[0];
    counter --;
    return randomElement;
  };

  for (var i = 0; i < n; i++) {
    orderedArray[i] = i;
  };

  for (var i = 0; i < n; i++) {
    array.push(getRandomNr());
  };
  return array;
};









module.exports = generator;