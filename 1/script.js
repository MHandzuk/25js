// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function number() {
  let a = +prompt("Перше число?");

  let c = +prompt("Друге число?");

  if (a < c) {
    return -1;
  } else if (a > c) {
    return 1;
  } else {
    return 0;
  }
}

document.write(number());
