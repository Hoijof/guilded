export function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function getRandomColor() {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}