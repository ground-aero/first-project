// Мы рекомендуем всегда экранировать дефис в регулярных выражениях: так можно избежать ошибок.
// То же самое касается вот этих символов:
// дефис -,
// точка .,
// плюс +,
// круглые скобки (),
// карет (шляпка) ^,
// открывающая квадратная скобка [.

//=============================================
// Regex - найдите
// const model = 'ВАЗ2110, Land Rover Discovery 4, Toyota Corolla, ВАЗ2121';
// const regex = /ВАЗ\d\d\d\d/gi;
//
// console.log(model.match(regex));

// ===========================================
// const str = '14/03/2018';
// const regex = /\d\d\W0[345]\W2018/g; // этот шаблон ищет все дни весны
//
// console.log(str.match(regex))

//=========================================
// const regex = /[a-z0-9\-]/gi; // все латинские буквы, все цифры и дефис
// const str = 'В Берлин я летал на boeing 737-800';
//
// console.log(str.match(regex).join(''));
// str.match(regex).join(''); // "boeing737-800"

//===========================================

/* REGEX - Пользователь на странице заказа ошибочно вписал имя с кириллической буквой и цифрой. Так онлайн-оплата не пройдёт.
Напишите два регулярных выражения, которые найдут любые символы за пределами стандартной латиницы. */

// const cardholder = 'VАSSILIY_PUPK1N';
// const letterRegExp = /\W/gi // напишите регулярное выражение, выявляющее не латинские буквы
// const digitRegExp = /\d/g // напишите регулярное выражение, выявляющее цифры
//
// console.log(cardholder.match(letterRegExp)); // [ "А" ]
// console.log(cardholder.match(digitRegExp));

//=======================================

// const comments = [
//     'Я пользуюсь iPhone 6s — всё летает.',
//     'У меня последний самсунг, всё хорошо.',
//     'Зачем платить больше, если есть Xiaomi?',
//     'Лучший телефон - Nokia 3310. У меня до сих пор работает.',
//     'Только последний iPhone — там улучшили водонепроницаемость.'
// ];
//
// const regexx = /iPhone/;
// const iPhoneComments = comments.filter((item) => regexx.test(item));

/* метод test проверяет, есть ли искомая строка
в тексте и возвращает true или false.
Позже разберём этот метод подробно. */

// console.log(iPhoneComments);

//========================================
// const regex = /[\wа-я\s]/gi;
//
// /* Ищем всю латиницу и всю кириллицу, все пробелы,
// а от знаков препинания избавляемся. */
//
// const str = 'Yandex 2020. Ещё не вечер!';
//
// str.match(regex).join(''); // "Yandex 2020 Ещ не вечер"

// ======= ё - чтобы не терять «ё», дописывайте её в набор: ===============
// const regex = /[\wа-я\sё]/gi;
//
// /* Ищем всю латиницу и всю кириллицу,
// а от знаков препинания избавляемся. */
//
// const str = 'Yandex 2020. Ещё не вечер!';
//
// str.match(regex).join(''); // "Yandex 2020 Ещё не вечер"
//
// // Теперь «ё» не потерялась!

// =================================================================
// const str = 'Оценки за четверть: 2 3 3 5 2 4 2 3 5';
// const regex = /[^1-3]/g;
//
// str.match(regex).join(''); // "Оценки за четверть:    5  4   5"
//
// // картина стала получше, но большие пустоты выдают обман

//================ находит в строке любые символы, кроме трёх: «п», «р», «и». ======
// const regex = /[^при]/g;
// const str = 'не прислоняться';
//
// console.log(str.match(regex));

// p.s: А когда вам надоест все всем запрещать, то введите исключающий "не" диапазон: [^не\s]

// [ training.....

// let regex = /^https*:\/\/[w\.]*[a-z0-9\.\_\-\_\~\:\/?#\[\]@!$&'\(\)*\+,;=]*$#*/ig // join('')
// let link = 'http://ya-ya-ya.ru'
// // let regex = /^https*:\/\/[www\.]*[a-z0-9\-]/.test(link); // join('')
// console.log(link.match(regex))

//2.
// let str1 = 'Любо братцы, любо!'
// console.log(str1.match(/любо/ig))

//3.
// let str = 'We will, we will rock you'
// console.log(str.replace(/we/ig, 'I'))

 // === Квантификаторы: + и * ==========================================================
// const strr = 'Правильно писать «свиной», с одной «н»';
// const regexxx = /свин+ой/;
//
// // такое регулярное выражение найдёт оба варианта: и с «н», и с «нн»
//
// console.log(strr.match(regexxx)); // [ "свиной" ]
// --------

//==== Квантификатор: * - приемлет от нуля до бесконечности символов - - - - - - -
// если звёздочка стоит после символа, этого символа в найденной строке может вовсе не быть: ==========
// const exc = 'экскаватор';
// const esc = 'эскалатор';
// const regexxxx = /эк*ска[вл]атор/; // буква "к" может встречаться, а может и не встречаться
//
// console.log(exc.match(regexxxx)); // [ "экскаватор" ]
// console.log(esc.match(regexxxx)); // [ "эскалатор" ]

// ==== Квантификатор: ? - Необязательный символ. его устраивает лишь 0 и 1: либо есть один символ, либо его нет вообще.
/* делает букву u необязательной и будет искать
оба варинта написания favourite и favorite. */
//
// const strz = 'favorite';
// const regexz = /favou?rite/g;
//
// console.log(strz.match(regexz)); // ["favourite", "favorite"]

// Контроль повторов — квантификатор {} ========================
// const regionCode = /\d{3}/;
// const    phoneNumber = 'Мой номер телефона: +7(999)123-12-21';
//
// console.log(phoneNumber.match(regionCode)); // [ "999" ]

// ======= Например, когда нас устроит от 2 до 5 повторений: =======
// const strzz = 'столько, стооолько и вот стооооооооолько';
// const regexzz = /сто{2,5}лько/;
//
// strzz.match(regexzz); // [ "стооолько" ]
//
// // в слове "стооооооооолько" повторов "о" больше 5

// ===== Верхнюю границу числа повторений можно не указывать: например, можно искать от 5 до бесконечности. ======
// const someSymbol = /a{1,}/g;
// const    str = 'alohaa';
//
// console.log(str.match(someSymbol)); // ["a", "aa"]

// == Задание. Получите из этой строки дату вылета на Марс — 18 августа — и выведите её в консоль. ================
// const regExp = /\d{1,2}\s[а-я]{1,}/; // напишите регулярное выражение, которое ищет число, пробел и месяц (на кирилице) 7-букв
//
// const aelita = '"Инженер М.С. Лось приглашает желающих лететь с ним 18 августа на планету Марс явиться для личных переговоров от 6 до 8 вечера. Ждановская набережная, дом 11, во дворе".';
//
// console.log(aelita.match(regExp)); //["18 августа"]

// ======== Задание. Ваша основная задача — найти дату. Избавьтесь от выражения «6 до» в выдаче, отредактировав квантификатор.
// const regExp = /\d{1,2}\s[а-я]{3,8}/g; // измените шаблон регулярного выражения, чтобы оно не находило "6 до"
// const aelita = '"Инженер М.С. Лось приглашает желающих лететь с ним 1 сентября на планету Марс явиться для личных переговоров от 6 до 8 вечера. Ждановская набережная, дом 11, во дворе".';
//
// console.log(aelita.match(regExp)); // ["1 сентября", "6 до", "8 вечера"]

// ============= Задача — найти все URL, содержащие IP адреса.  IP адрес соответствует диапазону от 0.0.0.0 до 999.999.999.999
// const regExp = /https?:\/\/\d[0-9]{1,3}\.\d[0-9]{1,3}\.\d[0-9]{1,3}\.\d[0-9]{1,3}/g; // Допишите шаблон регулярного выражения, чтобы оно находило только IP адреса
// const ipList = 'https://yandex.ru, https://praktikum.yandex.ru, https://77.88.21.35, http://77.88.55.50, https://173.194.73.94, https://73.725, https://178.250.100';
//
// console.log(ipList.match(regExp)); // ["https://77.88.21.35", "http://77.88.55.50", "https://173.194.73.94"]

//================================================

// const strtt = `Эта личность мне знакома! Знак допроса вместо тела.
// Многоточие шинели. Вместо мозга — запятая.`;
// const regextt = /[А-Я]*\.$/gim;
//
// console.log(strtt.match(regextt)); // [ "тела.", "запятая." ]

//======= Нужно вывести последнее слово каждой строки. ==================================
// const regex = /[А-ЯЁ]+\S*$/gmi; // напишите здесь регулярное выражение с шаблоном и флагами
// const str = `То отголосок юных дней
// В душе проснулся, замирая,
// И в блеске утренних лучей,
// Казалось, ночь была немая.
// То сон предутренний сошёл,
// И дух, на грани пробужденья,
// Воспрянул, вскрикнул и обрёл
// Давно мелькнувшее виденье.
// То был безжалостный порыв
// Бессмертных мыслей вне сомнений.
// И он умчался, пробудив
// Толпы забытых откровений.
// То бесконечность пронесла
// Над падшим духом ураганы.
// То Вечно-Юная прошла
// В неозаренные туманы.`;
//
// console.log(str.match(regex));  // ["дней", "замирая,", "лучей,", "немая.", ...]

//======= напишите регулярное выражение для отбора строк,
// начинающихся с тире "—" ===========================

// const dumas = `Рошфор взял д'Артаньяна за пуговицу, отвёл его в сторону и шёпотом спросил:
// — Вы видели его?
// — Кого?
// — Его.
// — Кого?
// — Дюма.
// — Отца?
// — Да.
// — Какой человек!
// — Ещё бы!
// — Какой пыл!
// — Нет слов!
// — А какая плодовитость!
// — Чёрт побери!`;
//
// /* напишите регулярное выражение для отбора строк,
// начинающихся с тире "—" */
// const regex = /^—/gm;
// console.log(dumas.match(regex));

//====================================
// let regex = /\w+/;
// let str = 'Someone must have been telling lies about Josef K.';
//
// console.log(str.match(regex)); // ["Someone"]
// regex.exec(str); // ["Someone"]

//============= метод RegExp.exec снова, он будет искать не с начала строки, а с того символа,
// на котором остановился в прошлый раз. То есть с записанного в свойство lastIndex:
// обладает памятью =============================
// const str = `Идёт без проволочек
// И тает ночь, пока
// Над спящим миром лётчик
// Уходит в облака.`;
// let regex = /.+/g;
//
// regex.exec(str); // ["Идёт без проволочек"]
// regex.exec(str); // ["И тает ночь, пока"]
// regex.exec(str); // ["Над спящим миром лётчик"]
// regex.exec(str); // ["Уходит в облака."]

//============  Найдите все дефисы - и пробелы до и после -  ===================================
// const	str = 'Я за вами, Мстислав Сергеевич, - крикнул он весело, - пожалуйте в машину, едем.';
//
// const regex = /\s\-{1,}\s/; // должен выхватывать дефисы с пустотами вокруг них
//
// const newStr = str.split(regex);
//
// console.log(newStr);

