// 1. У вас есть текст:
// var text = "'Isn't this game really cool' - he asked.\nShe said: 'Well, it's so hard and I can't pass the first level!'";
// , в котором для обозначения диалогов используются одинарные кавычки. Придумать шаблон, который меняет одинарные кавычки на двойные.

// 2. Улучшить шаблон таким образом, чтобы конструкции типа aren’t не меняли одинарную кавычку на двойную.

var text = "'Isn't this game really cool' - he asked.\nShe said: 'Well, it's so hard and I can't pass the first level!'";
var check = /'/;
console.log (text);
console.log (check.test(text));
console.log (check.exec(text));

// проверяем, есть ли в тексте есть одинарные кавычки. Если есть - запускаем функцию 
if (check.test(text)) {
	console.log ('в тексте есть одинарные кавычки');
	text1 = text.replace (/'/g, "\"")   // данный код решает первую часть задания - заменяет все одинарные кавычки на двойные.
	console.log (text1);
};

// Решение второй части задания.
// Один из возможных вариантов решения - найти все двойные кавычки между двух слов и заменить их обратно на одинарные.
console.log(text1.replace(/([\w])([\"])([\w])/g, "$1\'$3"));


// console.log((""Isn"t this game really cool" - he asked.\nShe said: "Well, it"s so hard and I can"t pass the first level!"".replace(/[\w]\"[\w]/, "$1 \' $2")); 

// function() {return "\'";}