// Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(n) {
  var f = "number";
  f = f.replace("$", n);
  for (let i = 0; i < n; i++) {
    if (parseInt(f)) {
      throw new Error(" Error");
    }
    f = eval(f);
  }
  return parseInt(f);
}
