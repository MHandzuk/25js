// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
let number_1 = prompt("Введіть число");
let number_2 = prompt("Введіть друге число");
let number_3 = prompt("Останнє число?");
function convert(a, b, c) {
  return a + b + c;
}
let result = convert(number_1, number_2, number_3);
document.write(result);
