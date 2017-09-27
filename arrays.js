var chocolateBars = ['snickers', 'hundred grand', 'kitkat', and 'skittles']

function addElementToBeginningOfArray(arr,element0) {
  return arr.unshift(element0);
}

function destructivelyAddElementToBeginningOfArray(arr,element0) {
  arr.unshift(element0);
  return arr;
}

function accessElementInArray(arr,n) {
  return arr[n];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(arr.length-1);
}
