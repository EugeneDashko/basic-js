const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
    let countT =0;
    let resArr =[];
        for(let i = 0; i < array.length; i++) {
          for (let g = 0; g < array[i].length; g++) {
           resArr.push(array[i][g])
          }
        }
    for( let t = 0; t <resArr.length; t++) {
    if(resArr[t] == '^^') {
    countT++;
      }
    }
    return countT
  throw new NotImplementedError();
}

module.exports = {
  countCats
};

countCats([
  ['##', 'dd', '00'],
  ['^^', '..', 'ss'],
  ['AA', 'dd', 'Oo'],
]);


