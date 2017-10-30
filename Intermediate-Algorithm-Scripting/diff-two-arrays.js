function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var bigArr = arr1.concat(arr2);
  //console.log("bigArr is: " + bigArr);
  bigArr.forEach(function(element, index){
    //console.log(element + " index: " + index);
    bigArr.splice(index, 1);
    //console.log(bigArr);
    if (bigArr.indexOf(element) == -1){
      //console.log("there is no element like that");
      newArr.push(element);
      //console.log(newArr);
    }
    bigArr.splice(index,0, element);
    //console.log(bigArr);
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
