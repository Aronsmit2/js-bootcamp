function rang(start, end){
    var range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    sum(range);
    return range;
}

function sum(rang){
  let sum = 0;
  for (var i = 0; i < rang.length; i++) {
    sum += rang[i];
  }
  console.log("the sum is ",sum);
}



console.log(rang(1,10));
