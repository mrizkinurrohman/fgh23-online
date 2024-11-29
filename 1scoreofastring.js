/**
 * You are given a string . The score of a string is defined as the sum of the
 * absolute difference between the ASCII values of adjacent characters s
 * Return the score of s
 * absolute | a - b |
 */

/**
 * hello
 * 104 101 108 108 111
 * he el ll lo
 * 104-101 101-108 108-108 108-111
 * 3 7 0 3
 * 10 3
 * 13
 */

/**
 * 1. mulai
 * 2. input string s
 * 3. pisahkan per pasangan antara huruf yang berdampingan
 * 4. tentukan nilai ascii dari masing-masing huruf
 * 5. kalkulasi perbedaan absolut dari masing masing pasangan
 * 6. jumlahkan perbedaan absolut dari masing masing pasangan
 * 7. output score dari s
 * 8. selesai
 */

function scoreOfAString(s) {
  //  validasi
  if (typeof s != "string") return "Error";

  // ubah string menjadi array
  const sArr = s.split("");

  // 3. pisahkan per pasangan antara huruf yang berdampingan
  /**
   * kelompokkan per yg berdampingan
   * 01 12 23 34 45
   * const pairedSArr = sArr
    .map(function (el, index, arr) {
      if (arr[index + 1] == undefined) return;
      return el + arr[index + 1];
      // membuat pasangan antara el tsb dengan idx selanjutnya
    })
    .filter(function (el) {
      return el !== undefined;
    });
   */
  const pairedSArr = [];
  for (let i = 0; i < sArr.length - 1; i++) {
    pairedSArr[i] = sArr[i] + sArr[i + 1];
  }
  // 4. tentukan nilai ascii dari masing-masing huruf
  // 5. kalkulasi perbedaan absolut dari masing masing pasangan
  const diffSArr = [];
  for (let i = 0; i < pairedSArr.length; i++) {
    let tempResult = pairedSArr[i].charCodeAt(0) - pairedSArr[i].charCodeAt(1);
    if (tempResult < 0) tempResult = tempResult * -1;
    diffSArr[i] = tempResult;
  }
  // 6. jumlahkan perbedaan absolut dari masing masing pasangan
  let sum = 0;
  for (let i = 0; i < diffSArr.length; i++) {
    sum = sum + diffSArr[i];
  }
  return sum;
}

const str = "zaz";
console.log(scoreOfAString(str));
