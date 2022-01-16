const title = 'Name project';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 50;
const rollback = 10;
const fullPrice = 500;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback / 100));