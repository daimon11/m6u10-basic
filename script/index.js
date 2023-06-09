//! 001

const task1str = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const filter = (arr) => {
  const regexp = /\S+(jsx|ts|js)/g;
  const newArr = arr.join(' ').match(regexp);
  return newArr;
};

const task001 = filter(task1str);

console.log(task001);


//! 002

const emailVerif = /^\w+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}$/gi;


//! 003

const reqWord = /\(.+?\)/g;

const textTask3 = `
Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.
`;

const result = textTask3.match(reqWord);
console.log('result', result);

//! 004

const strTask4 = `http://site.ru  съесть шаверму или шаурму`;

const urlChange = (str) => {
  const reqURL = /(?<protocol>[a-z]{4,5}:\/{2})(?<domen>\w*\.[a-z]{2,3})/g;
  const finish = str.match(reqURL)[0].replace(reqURL, `<a href="$<protocol>$<domen>">$<domen></a>`);

  return finish;
};

const resultUrl = urlChange(strTask4);
console.log('resultUrl = ', resultUrl);
