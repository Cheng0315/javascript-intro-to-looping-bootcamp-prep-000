function forLoop(array) {
  for (var i = 0; i < array.length; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}