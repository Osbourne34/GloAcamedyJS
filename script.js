const title = prompt('Как называется ваш проект?'); // +
const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные'); // +
const adaptive = confirm('Нужен ли адаптив на сайте?'); // +
const screenPrice = +prompt('Сколько будет стоить данная работа?'); // +

const service1 = prompt('Какой дополнительный тип услуги нужен?'); // +
const servicePrice1 = +prompt('Сколько это будет стоить?'); // +
const service2 = prompt('Какой дополнительный тип услуги нужен?'); // +
const servicePrice2 = +prompt('Сколько это будет стоить?'); // +

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollback = 10;

const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

if (fullPrice >= 30000) {
    alert(`${fullPrice}p. Даем скидку 10%`);
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    alert(`${fullPrice}p. Даем скидку 5%`);
} else if (fullPrice < 15000 && fullPrice > 0) {
    alert(`${fullPrice}p. Скидка не предусмотрена`);
} else if (fullPrice <= 0) {
    alert('Что то пошло не так');
}

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(fullPrice);
console.log(rollback);
console.log(servicePercentPrice);
