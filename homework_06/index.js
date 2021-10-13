//1)
/*
console.log(`1. Реализовать функцию, принимающую число (индекс в последовательности Фибоначчи), 
функция должна вернуть значение числа. Использовать рекурсию.`);
const fib = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
let i = 45;
console.log(`Для индекса ${i} число Фибоначчи = ${fib(i)}`);

//2)
console.log(`2. Модернизировать написанную функцию, добавив кэширование (функция “”запоминает”” входной параметр и вычесленное значение, 
при следующем вызыве с этим же параметром, функция не вычисляет значение, а возвращает из памяти)`);
const caching = (f) => {
    const cache = {};
    return (a) => {
        console.log(`Индекс = ${a}`);
        if (cache[a]) {
            console.log(`Значение числа взято из кэша = ${cache[a]}`);
            return cache[a];
        }
        else {
            console.log(`Вычисляем число Фибоначчи...`);
            const fibRes = f(a);
            console.log(`Число = ${fibRes}`);
            console.log(`Добавляем в кэш для индекса ${a} число ${fibRes}`);
            cache[a] = fibRes;
            return fibRes;
        }
    }
}
const fib2 = caching(fib);
console.log(`Для индекса ${i} число Фибоначчи = ${fib2(i)}`);
console.log(`Для индекса ${i} число Фибоначчи = ${fib2(i)}`);
console.log(`Для индекса ${i} число Фибоначчи = ${fib2(i)}`);
i = 44;
console.log(`Для индекса ${i} число Фибоначчи = ${fib2(i)}`);
*/
//3)
//РАБОТАЕТ НЕКОРРЕКТНО
console.log(`3. Разработать рекурсивную функцию, принимающую массив, содержащий массивы из двух элементов, 
в каждом из которых первый элемент является строкой, 
а второй строкой, числом, логическим значением, объектом, или таким же массивом. 
Функция должна преобразовать массив в объект.
Пример входного значения:[[“name”: “Anna”], [“age”: 22],[“pets”: [[“dog”: “Faust”],[“cat”: “Balthazar”]]]]
Пример возвращаемого объекта:{namee: “Anna”,age: 22,pets: {dog: “Faust”,cat: “Balthazar”}}`);
const array3 = [
    ["name","Anna"],["age", 22],
    ["pets", [ ["dog", "Faust"], ["cat","Balthazar"] ] ],
    ["female", true], ["friends", {"1": "Oleg", "2": "Olga"}]
];
console.log(array3);
let Obj = {};
const toObj = (arr) => {
    arr.forEach((curr, index, currA) => {
            //console.log(curr);
            if (Array.isArray(curr)) {
                toObj(curr);
            } else {
                Obj[currA[0]] = currA[1];
            }
        }
    );
}

toObj(array3);
console.log(Obj);


