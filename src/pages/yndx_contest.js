// _------------------------------------------------------0--------------------------------------------------------------------------
// _------------------------------------------АННОТАЦИЯ ТЕСТОВОЙ ПЛАТФОРМЫ----------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// Данные во входном потоке могут состоять из нескольких строк.
// Чтобы прочитать их, можно использовать метод rl.on(),
// который вызывается каждый раз при появлении новой строки в потоке ввода.
// Чтобы вывести результат в поток вывода (stdout), можно использовать метод console.log().
// Пример: console.log('Результат:', result);

// Пример решения задачи "Вычислите сумму A+B":
// rl.on('line', line => {
// const [a, b] = line.split(' ').map(Number);
//  console.log(a + b);
//  rl.close();
// });


// _------------------------------------------------------1--------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// Требуется написать программу на JavaScript (в месте где есть фраза: // ваш код), которая поможет нашим коллегам 
// находить самый короткий путь от них до желаемого контакта.

// graph — объект ключ/значение. Количество ключей 0 ≤ N ≤ 50, количество значений 0 ≤ N ≤ 50
// startVertex — начальная вершина
// endVertex — конечная вершина
// Шаблон
// /**
//  * @param {{
//  *  graph: Record<string, string[]>,
//  *  startVertex: string,
//  *  endVertex: string,
//  * }}
//  * @returns {string[]}
//  */
// module.exports = function solution({ graph, startVertex, endVertex }) {
//     // ваш код
// }

// Формат ввода
// Пример 1
// module.exports = {
//   graph: {
//     Александра: ["Борис"],
//     Борис: ["Александра", "Светлана"],
//     Светлана: ["Борис"],
//   },
//   startVertex: "Александра",
//   endVertex: "Светлана",
// };
// Пример 2
// module.exports = {
//   graph: {
//     Артемий: ["Бронислав", "Дементий"],
//     Бронислав: ["Артемий", "Софья", "Дементий"],
//     Софья: ["Бронислав"],
//     Дементий: ["Артемий","Бронислав"],
//     Фаина: ["Гаврила"],
//     Гаврила: ["Фаина"],
//   },
//   startVertex: "Артемий",
//   endVertex: "Фаина",
// };
// Формат вывода
// Пример 1
// Самый короткий путь от Александры до Светланы
// ["Александра", "Борис", "Светлана"]

// Пример 2
// Путь от Артемия до Фаины отсутствует, поэтому выводим пустой массив
// []


//----------------- ---------------------------------------- ВЫПОЛНЕНИЕ-3:

// function solution({ graph, startVertex, endVertex }) {
//     if (!graph || !graph[startVertex] || !graph[endVertex]) return [];
//     if (startVertex === endVertex) return [startVertex];

//     let queue = [startVertex];
//     let parentMap = new Map(); // Хранит предков вершин
//     parentMap.set(startVertex, null);

//     while (queue.length > 0) {
//         let node = queue.shift();
//         for (let neighbor of graph[node] || []) {
//             if (!parentMap.has(neighbor)) {
//                 parentMap.set(neighbor, node);
//                 if (neighbor === endVertex) {
//                     let path = [];
//                     while (neighbor !== null) {
//                         path.push(neighbor);
//                         neighbor = parentMap.get(neighbor);
//                     }
//                     return path.reverse();
//                 }
//                 queue.push(neighbor);
//             }
//         }
//     }

//     return [];
// };




//----------------- ---------------------------------------- ВЫПОЛНЕНИЕ-2:
// module.exports = {
//     graph: {
//       Александра: ["Борис"],
//       Борис: ["Александра", "Светлана"],
//       Светлана: ["Борис"],
//     },
//     startVertex: "Александра",
//     endVertex: "Светлана",
//   };

//   module.exports = {
//     graph: {
//       Артемий: ["Бронислав", "Дементий"],
//       Бронислав: ["Артемий", "Софья", "Дементий"],
//       Софья: ["Бронислав"],
//       Дементий: ["Артемий","Бронислав"],
//       Фаина: ["Гаврила"],
//       Гаврила: ["Фаина"],
//     },
//     startVertex: "Артемий",
//     endVertex: "Фаина",
//   };

let myGraph = {
    graph: {
        Александра: ["Борис"],
        Борис: ["Александра", "Евгений", "София"],
        Евгений: ["София", "Александра"],
        Светлана: ["Борис", "Евгений"],
        София: ["Евгений"],
    }, 
    startVertex: "Александра",
    endVertex: "София",
}
function solution({ graph, startVertex, endVertex }) {
    if (!graph || Object.keys(graph).length === 0) {
        return []; // Если граф пустой
    }

    if (!(startVertex in graph) || !(endVertex in graph)) {
        return []; // Если хотя бы одной вершины нет в графе
    }

    if (startVertex === endVertex) {
        return [startVertex]; // Если начальная и конечная вершина совпадают
    }

    let queue = [[startVertex]];
    let visited = new Set([startVertex]);

    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        if (node === endVertex) {
            return path; // Найден кратчайший путь
        }

        for (let neighbor of (graph[node] || [])) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }

    return []; // Если путь не найден
};

console.log(solution(myGraph))


//----------------- ---------------------------------------- ВЫПОЛНЕНИЕ-1:
// Вот реализация алгоритма поиска кратчайшего пути с использованием алгоритма BFS (поиск в ширину):

// let myGraph = {
//     graph: {
//         Александра: ["Борис"],
//         Борис: ["Александра", "Светлана"],
//         Светлана: ["Борис"],
//     }, 
//     startVertex: "Александра",
//     endVertex: "Светлана",
// }


// function solution({ graph, startVertex, endVertex }) {
    
//     // Проверяем, существуют ли вершины: если startVertex или endVertex отсутствуют в графе, сразу возвращаем []
//     if (!(startVertex in graph) || !(endVertex in graph)) {
//         []
//     } else { console.log('вершина есть')}

//     let queue = [[startVertex]] // Очередь путей, списки путей
//   console.log(queue)
//     let visited = {}
//      visited[startVertex] = true // Посещенные вершины
//   console.log(visited)


//     while (queue.length > 0) {
//         let path = queue.shift() // Берём первую вершину пути
//         let node = path[path.length - 1] // Последняя вершина в пути
//    console.log('node:', node); console.log('path:', path)


//         if (node === endVertex) { // Возвращаем кратчайший путь
//            console.log('node path', path)
//             return path // Если нашли конечную вершину, возвращаем путь
//         }

//         for (let neighbor of graph[node]) {
//             if (!visited[neighbor]) {
//                 visited[neighbor] = true; // Помечаем вершину как посещенную
//                 queue.push([...path, neighbor]); // Добавляем новый путь в очередь
//             }
//         }

//     }

//     return []
// }


// console.log(solution(myGraph))








// _------------------------------------------------------ С-3 --------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// Новая задача "Капризный король". 
// Язык JavaScript (для исполнения в Node.js). 
// Шахматный король стоит в левом верхнем углу шахматной доски размером N×M. За один шаг он может перейти в соседнюю клетку ниже, либо в клетку правее, либо в клетку правее и ниже (то есть сделать шаг по диагонали). Его цель — добраться таким образом до правого нижнего угла доски. 

// Да только вот король тот капризен, а потому не наступает трижды подряд на клетки одного цвета. Доска имеет стандартную шахматную покраску: каждая клетка является либо чёрной, либо белой, а цвет каждой пары имеющих общую сторону клеток различен.
// ВОПРОС: 

// Сколько существует различных путей, которыми капризный король смог бы добраться до своей цели? В ответ вывести число таких путей по модулю 1000 (иначе говоря - остаток от деления реального числа путей на 1000).
// Формат ввода: Входные данные содержат два натуральных числа 
// N и M, разделённые одним пробелом. Оба числа не превосходят 100. 

// Формат вывода: Вывести одно целое число — ответ на вопрос задачи.
// Пример 1: ввод 2 2 , вывод 3
// Пример 2: ввод 2 3, вывод 5
// Пример 3: ввод 3 3, вывод 12

//----------------- ---------------------------------------- ВЫПОЛНЕНИЕ -2:
// const fs = require("fs");

// function countWays(N, M) {
//     const MOD = 1000;

//     // DP-массив: dp[i][j][prevColor][count] - количество способов попасть в клетку (i, j),
//     // если предыдущий цвет был prevColor и count раз подряд был этот цвет.
//     let dp = Array.from({ length: N }, () =>
//         Array.from({ length: M }, () =>
//             Array.from({ length: 2 }, () => Array(3).fill(0))
//         )
//     );

//     // Стартовая клетка (0,0) - белая (0)
//     dp[0][0][0][1] = 1; // Начинаем путь с белой клетки с 1 посещением.

//     // Заполняем DP таблицу
//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < M; j++) {
//             let color = (i + j) % 2; // Цвет текущей клетки (0 - белый, 1 - черный)

//             for (let prevColor = 0; prevColor < 2; prevColor++) {
//                 for (let count = 1; count < 3; count++) {
//                     let ways = dp[i][j][prevColor][count];
//                     if (ways === 0) continue;

//                     // Двигаемся вниз
//                     if (i + 1 < N) {
//                         let nextColor = (i + 1 + j) % 2;
//                         let nextCount = nextColor === prevColor ? count + 1 : 1;
//                         if (nextCount < 3) {
//                             dp[i + 1][j][nextColor][nextCount] =
//                                 (dp[i + 1][j][nextColor][nextCount] + ways) % MOD;
//                         }
//                     }

//                     // Двигаемся вправо
//                     if (j + 1 < M) {
//                         let nextColor = (i + (j + 1)) % 2;
//                         let nextCount = nextColor === prevColor ? count + 1 : 1;
//                         if (nextCount < 3) {
//                             dp[i][j + 1][nextColor][nextCount] =
//                                 (dp[i][j + 1][nextColor][nextCount] + ways) % MOD;
//                         }
//                     }

//                     // Двигаемся по диагонали
//                     if (i + 1 < N && j + 1 < M) {
//                         let nextColor = (i + 1 + (j + 1)) % 2;
//                         let nextCount = nextColor === prevColor ? count + 1 : 1;
//                         if (nextCount < 3) {
//                             dp[i + 1][j + 1][nextColor][nextCount] =
//                                 (dp[i + 1][j + 1][nextColor][nextCount] + ways) % MOD;
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     // Итоговый ответ - сумма всех допустимых состояний в (N-1, M-1)
//     let result = 0;
//     for (let prevColor = 0; prevColor < 2; prevColor++) {
//         for (let count = 1; count < 3; count++) {
//             result = (result + dp[N - 1][M - 1][prevColor][count]) % MOD;
//         }
//     }
//     return result;
// }

// // Читаем ввод
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");
// const N = parseInt(input[0], 10);
// const M = parseInt(input[1], 10);

// console.log(countWays(N, M));




//----------------- ---------------------------------------- ВЫПОЛНЕНИЕ-1:
// // НЕ ПРИНЯТО ТЕСТАМИ !!!!
// const fs = require("fs");
// function countWays(N, M) {
//     const MOD = 1000;
    
//     // Создаем DP таблицу размером N x M x 2 x 3
//     let dp = new Array(N).fill(0).map(() =>
//         new Array(M).fill(0).map(() =>
//             new Array(2).fill(0).map(() => new Array(3).fill(0))
//         )
//     );

//     // Начальная клетка (0,0) - белая (0)
//     dp[0][0][0][0] = 1;

//     // Заполняем DP таблицу
//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < M; j++) {
//             let color = (i + j) % 2; // Цвет клетки

//             for (let prevColor = 0; prevColor < 2; prevColor++) {
//                 for (let count = 0; count < 3; count++) {
//                     let ways = dp[i][j][prevColor][count];
//                     if (ways === 0) continue;

//                     // Двигаемся вниз
//                     if (i + 1 < N) {
//                         let nextColor = (i + 1 + j) % 2;
//                         let nextCount = nextColor === prevColor ? count + 1 : 1;
//                         if (nextCount < 3) {
//                             dp[i + 1][j][nextColor][nextCount] =
//                                 (dp[i + 1][j][nextColor][nextCount] + ways) % MOD;
//                         }
//                     }

//                     // Двигаемся вправо
//                     if (j + 1 < M) {
//                         let nextColor = (i + (j + 1)) % 2;
//                         let nextCount = nextColor === prevColor ? count + 1 : 1;
//                         if (nextCount < 3) {
//                             dp[i][j + 1][nextColor][nextCount] =
//                                 (dp[i][j + 1][nextColor][nextCount] + ways) % MOD;
//                         }
//                     }

//                     // Двигаемся по диагонали
//                     if (i + 1 < N && j + 1 < M) {
//                         let nextColor = (i + 1 + (j + 1)) % 2;
//                         let nextCount = nextColor === prevColor ? count + 1 : 1;
//                         if (nextCount < 3) {
//                             dp[i + 1][j + 1][nextColor][nextCount] =
//                                 (dp[i + 1][j + 1][nextColor][nextCount] + ways) % MOD;
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     // Итоговый ответ - сумма всех допустимых состояний в (N-1, M-1)
//     let result = 0;
//     for (let prevColor = 0; prevColor < 2; prevColor++) {
//         for (let count = 0; count < 3; count++) {
//             result = (result + dp[N - 1][M - 1][prevColor][count]) % MOD;
//         }
//     }
//     return result;
// }

// // Читаем ввод
// const input = fs.readFileSync(0, "utf-8").trim().split(" ");
// const N = parseInt(input[0], 10);
// const M = parseInt(input[1], 10);









// _------------------------------------------------------ D - 4 --------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// NodeJS 18. Задача Внедрение кэширования.
// наблюдаются проблемы с памятью при длительном использовании приложения. Результаты, полученные на предыдущих запросах к бэкенду, остаются в памяти, что приводит к зависанию страницы и прочим неприятным последствиям.
// Нужно написать функцию, которая получает на вход размер кэша и возвращает интерфейс для встраивания в проект, который будет управлять кэшированием данных на странице. В процессе обсуждений было решено использовать приоритетное кэширование, где дольше сохраняются в кэше те данные, которые использовались последними.

// interface EntityDataI<Data extends {id: number}> {
//   setCacheChunk: (value: Data | Data[]): void;
//   changeItem: (newData: Data | Data[]): void;
//   getCacheItemById: (id: number): Data;
//   getData: (): Data[];
// }
// setCacheChunk — Функция чтобы положить новую порцию данных с сервера в кэш;
// changeItem — Функция для пользовательского изменения кэшированных данных;
// getCacheItemById — Функция для получения элемента из кэша по id;
// getAppCache — Функция для получения текущего состояния кэша;
// В результате у вас должна получится следующая функция:

// module.exports = function getCache(maxSize) {
//   // Ваш JavaScript код
// }
// Пример использования

// const cache = getCache(3); // Размер кэша равен трем элементам

// cache.setCacheChunk({id: 1}); // Добавляем 1 объект в кэш
// cache.setCacheChunk([{id: 2}, {id: 3}]); // Добавляем несколько объектов в кэш
// cache.getData() // [{id: 1}, {id: 2}, {id: 3}]

// cache.setCacheChunk({id: 4}); // Добавляем 1 объект в заполненный кэш
// cache.getData() // [{id: 2}, {id: 3}, {id: 4}]

// cache.changeItem({id: 3, log: 'some data'}); // Изменяем объект в кэше
// cache.getData() // [{id: 2}, {id: 3, log: 'some data'}, {id: 4}]

// cache.setCacheChunk([{id: 5}, {id: 6}]); // Добавляем несколько объектов в заполненный кэш
// cache.getData() // [{id: 3, log: 'some data'}, {id: 4}, {id: 5}, {id: 6}]

// cache.setCacheChunk({id: 3, field: 'some value'}); // Измененный объект перестает быть таким
// // Из-за того что объект был установлен снова, его приоритет повышен
// cache.getData() // [{id: 5}, {id: 6}, {id: 3, field: 'some value}]

// cache.setCacheChunk([{id: 7}, {id: 8}, {id: 9}]); // Добавляем объекты в кэш
// cache.getCacheItemById(7); //Читаем объекты из кэша
// cache.getCacheItemById(8);
// cache.getData() // [{id: 9}, {id: 7}, {id: 8}]

// На что следует обратить внимание:

// Размер кэша (без измененных данных) должен быть не больше maxSize;
// При вызове функции получения данных getCacheItemById, приоритет полученного элемента кэша повышается над остальными;
// Добавленные элементы через setCacheChunk так же получают повышенный приоритет над остальными в порядке добавления;
// Измененные пользователем данные должны оставаться в кэше;
// Измененные пользователем данные не учитываются в подсчете размера кэша;
// При получении с сервера новой версии измененных данных (совпадают по id) они перестают быть измененными и новая версия данных кэшируется по основным правилам.

//----------------- ---------------------------------------- ВЫПОЛНЕНИЕ:

// module.exports = function getCache(maxSize) {
//     const cache = new Map();
//     const modifiedData = new Map();

//     return {
//         setCacheChunk(value) {
//             const items = Array.isArray(value) ? value : [value];
            
//             for (const item of items) {
//                 if (modifiedData.has(item.id)) {
//                     modifiedData.delete(item.id); // Удаляем из измененных, так как пришли новые данные
//                 }
                
//                 if (cache.has(item.id)) {
//                     cache.delete(item.id); // Удаляем, чтобы переустановить с новым приоритетом
//                 }
                
//                 cache.set(item.id, item);
                
//                 if (cache.size > maxSize) {
//                     const oldestKey = cache.keys().next().value;
//                     cache.delete(oldestKey);
//                 }
//             }
//         },
        
//         changeItem(newData) {
//             const items = Array.isArray(newData) ? newData : [newData];
//             for (const item of items) {
//                 if (cache.has(item.id)) {
//                     cache.delete(item.id);
//                 }
//                 modifiedData.set(item.id, item);
//             }
//         },
        
//         getCacheItemById(id) {
//             if (modifiedData.has(id)) {
//                 return modifiedData.get(id);
//             }
            
//             if (cache.has(id)) {
//                 const item = cache.get(id);
//                 cache.delete(id);
//                 cache.set(id, item); // Повышаем приоритет
//                 return item;
//             }
            
//             return undefined;
//         },
        
//         getData() {
//             return [...modifiedData.values(), ...cache.values()];
//         }
//     };
// };







// _------------------------------------------------------6--------------------------------------------------------------------------
// _------------------------------------------------------0--------------------------------------------------------------------------
// Магические cсылки  

// Условиe: 
// Напишите функцию isValidYandexLink(url), которая проверяет, является ли переданная строка параметра url ссылкой на любой из сервисов Яндекса. Нужно распознавать истинные магические ссылки и блокировать поддельные 

// 1. Ссылка считается валидной, если она ведет на один из доменов, принадлежащих Яндексу.
// 2. Домен может быть как основным (.ru), так и международным (.by, .com и т.д.).
// 3. Примеры доменов и поддоменов:
// домены: ya.ru, yandex.com, yandex.kz, yandex.by, yandex.az, и т.д.
// поддомены: education.yandex., lyceum.yandex., shad.yandex., и т.д.

// Примеры
// isValidYandexLink("https://ya.ru") // true
// isValidYandexLink("https://education.yandex.ru") // true
// isValidYandexLink("http://yandex.ru/cup") // true
// isValidYandexLink("https://dataschool.yandex.com") // true
// isValidYandexLink("https://education.yandex.ru/uchebnik") // true
// isValidYandexLink("https://google.com") // false
// isValidYandexLink("http://example.com") // false
// isValidYandexLink("hts://y*ndex.ru/somepath") // false
// - Функция должна возвращать true, если переданная ссылка валидна и ведет на один из сервисов Яндекса.
// - Функция должна возвращать false, если переданная ссылка не ведет на сервис Яндекса или если ссылка невалидна (например, htp:/wrong.url).
// - Функция должна корректно обрабатывать различные виды URL (с/без http(s), с различными разделителями и параметрами).

// Формат ввода
// function isValidYandexLink(url) {
//     // Your code here...
// }

// module.exports = isValidYandexLink;
// Язык
// (make) Node.js 18.16.0

//----------------- ---------------------------------------- ВЫПОЛНЕНИЕ:

// function isValidYandexLink(url) {
//     try {
//         let parsedUrl = new URL(url);
//         let domain = parsedUrl.hostname;

//         // проверка доменов и поддоменов Яндекса
//         let yandexRegex = /^(?:[\w-]+\.)*yandex\.[a-z]+$|^ya\.ru$/i;

//         return yandexRegex.test(domain);
//     } catch (error) {
//         return false; // Если URL невалидный
//     }
// }

// module.exports = isValidYandexLink;

