var chocolateBars = ['snickers', 'hundred grand', 'kitkat', and 'skittles']

function addElementToBeginningOfArray(arr,element0) {
  const arr2 = arr.unshift(element0);
  return arr2;
}

function destructivelyAddElementToBeginningOfArray(arr,element0) {
  return arr.unshift(element0);
}

function accessElementInArray(arr,n) {
  return arr[n];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift();
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop();
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(arr.length-1);
}
