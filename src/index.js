module.exports = function getZerosCount(number, base) {
  // Алгоритм решения
// Разложить число B системы счисления на простые множители.
// Разделить число N на каждый уникальной простой множитель K, домножая K сам на себя до тех пор, пока
// (N / K) будет больше единицы, при этом округляя каждый результат до меньшего целого.
// Если при разложении числа системы счисления мы получили несколько одинаковых простых множителей K, то результат выше мы должны разделить на количество одинаковых K.
// Из всех делений N на каждый уникальный множитель K выбрать наименьшее частное, которое и будет нашим ответом.
  let baseObj = {};
  for (let i = 2; i <= base; i++) {
    let count  = 0;
    while (base % i === 0) {
      count ++;
      base = base / i;
      baseObj[i] = count;
    }
  }
  let powerArr = [];
  for (let key in baseObj) {
    let num = number;
    let sum = 0;
    while (num) {
      num = Math.floor(num / key);
      sum += num;
    }
    powerArr.push(Math.floor(sum / baseObj[key]));
  }
  return Math.min(...powerArr);
};