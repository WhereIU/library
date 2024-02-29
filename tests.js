import library from './index.js';

console.log('Добавление книг в библиотеку');
library.addBook('Хоббит', 'Дж. Р. Р. Толкиен', 1937, 'Фэнтези', 310);
library.addBook('Гарри Поттер и философский камень', 'Дж. К. Роулинг', 1997, 'Фэнтези', 223);
library.addBook('1984', 'Джордж Оруэлл', 1949, 'Антиутопия', 328);
library.addBook('Хоббит', 'Дж. Р. Р. Толкиен', 1937, 'Фэнтези', 310);
library.addBook('Хоббит2', 'Дж. Р. Р. Толкиен', 1937, 'Фэнтези', 310);

console.log('Поиск книг по автору');
console.log(library.findBooksByAuthor('Дж. Р. Р. Толкиен'));

console.log('Фильтрация книг по жанру');
console.log(library.filterBooksByGenre('Фэнтези'));

console.log('Генерация отчета по количеству книг каждого жанра');
console.log(library.genreReport());

console.log('Генерация отчета по среднему количеству страниц');
console.log(`Среднее количество страниц: ${library.averagePagesReport()}`);

console.log('Удаление книги и вывод обновленной библиотеки');
library.removeBook('1984');
console.log(library);

console.log('вывод списка всех книг, отсортированных по году издания, от новых к старым.');
console.log(library.sortedPublication());
