//1)
console.log(`1. На вход поступает массив, вывести массив, удалив неуникальные значения.`);
const array1 = [5,-2,3,4,5,6,-2,5,5,0];
console.log(`Входные данные:`, array1);
console.log(`Ответ:`, array1.filter((value, index) => {
    return array1.indexOf(value) === index;
}));

//2)
console.log(`2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать.`);
const array2 = [5,-2,3,4,5,6,-2,5,5,0];
console.log(`Входные данные:`, array2);
console.log(`Ответ:`, array2.map((value, index) => {
    return array2[array2.length - index - 1];
}));

//3)
console.log(`3. На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект, где ключами являются нулевой индекс вложенныхых массивов, а значениями являются элементы с индексом один.`);
const array3 = [ [5, 0], ["6", 1], ["test", 2] ];
console.log(`Входные данные:`, array3);
console.log(`Ответ:`, Object.fromEntries(array3));


//4)
console.log(`4. На вход поступает объект, вывести сумму числовых свойств объекта.`);
const obj4 = { key1: 1, key2: "key2", key3: 3, key4: true, key5: function () {}, key6: 99 };
console.log(`Входные данные:`, obj4);
let count4 = 0;
for (let key in obj4) {
    if (typeof obj4[key] == 'number') {
        count4 += obj4[key];
    }
}
console.log(`Ответ:`, count4);


//5)
console.log(`5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.`);
const array5 = [5,-2,3,4,5,6,-2,5,5,0];
console.log(`Входные данные:`, array5);
console.log(`Ответ:`, (array5.reduce((acc, value) => acc + value, 0)) / array5.length);

//6)
console.log(`6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, хранящее текущее значение и методы сложения, вычитания,
умножения и деления, принимающие число и манипулирующий свойством значения в соответствии с назначением метода, а так же функцию, сбрасывающую значение в ноль.`);
function Calc(number) {
    this.number = number;
    this.add = (num) => this.number += num;
    this.sub = (num) => this.number -= num;
    this.mult = (num) => this.number *= num;
    this.div = (num) => this.number /= num;
    this.clear = () => this.number = 0;
    this.read = () => { return this.number; }
}
const add = 4;
const sub = 3;
const mult = 2;
const div = 8;
const calc = new Calc(5);
console.log(`Инициализация: ${calc.read()}`)
calc.add(add);
console.log(`Добавили ${add} = ${calc.read()}`)
calc.sub(sub);
console.log(`Отняли ${sub} = ${calc.read()}`)
calc.mult(mult);
console.log(`Умножили на ${mult} = ${calc.read()}`)
calc.div(div);
console.log(`Разделили на ${div} = ${calc.read()}`)
calc.clear();
console.log(`Сброс: ${calc.read()}`)

//7)
console.log(`7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями numbers, strings и objects, содержащими массив со значениями,
соответствующими названию поля.`);
const array7 = [1, "1", { key1: 1 }, 2, "2", { key2: 2 }, 3, "3", { key3: 3 }];
console.log(`Входные данные:`, array7);
const obj7 ={}, numArr = [], strArr = [], objArr = [];
for (let item of array7) {
    if (typeof item == 'number') {
        numArr.push(item);
    }
    if (typeof item == 'string') {
        strArr.push(item);
    }
    if (typeof item == 'object') {
        objArr.push(item);
    }
}
obj7.numbers = numArr;
obj7.strings = strArr;
obj7.objects = objArr;
console.log(`Ответ:`, obj7);

//8)
console.log(`8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива, 
значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого)`);
const array8 = [5,-2,3,4,5,6,-2,5,5,0];
const from = 4, to = 10;
console.log(`Входные данные:`, array8);
console.log(`Диапазон: от ${from} до ${to}`);
console.log(`Ответ:`, array8.filter((value, index) => {
    return ( value >= from && value <= to );
}));

//9)
console.log(`9. Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false`);
const strA = "Friend", strB = "finder";
let flag = true;
console.log(`Входные данные: 1) ${strA} и 2) ${strB}`);

function getObj(str) {
    const charObj = {};
    for(let char of str.replace(/[^\w]/g).toLowerCase()) {
        charObj[char] = charObj[char] + 1 || 1;
    }
    return charObj;
}

const charObjA = getObj(strA);
const charObjB = getObj(strB);

if (Object.keys(charObjA).length !== Object.keys(charObjB).length) {
    console.log("Ответ: false");
}
else {
    for (let char in charObjA) {
        if (charObjA[char] !== charObjB[char]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log("Ответ: true");
    } else {
        console.log("Ответ: false");
    }
}

//10)
console.log(`10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую (считать, 
что значением ключа объекта не может быть объектом или массивом, содержащими объекты) сама функция в консоль выводиться не должна.`);
const obj10 = {key1: 1, key2: "string", key3: true, key4: [1,2,"string"], key5: 5,
    showAllProperties: function show() {
    let str = "";
    for(var key in obj10) {
        if (typeof obj10[key] !== 'function') {
            str = str + `${key}: ${obj10[key]}, `;
        }
    }
    console.log(`Ответ: ${str.slice(0,-2)}`);
}
};
console.log(`Входные данные:`, obj10);
obj10.showAllProperties();

//11)
console.log(`11. Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства), метод принимает ключь (строка), 
значение (произвольное) и объект со свойствами writable, configurable, enumerable (разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства). 
Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено`);
function Obj11() {
    this.prop1;
    this.prop2;
    this.setProp = (key, value, prop) => {
        if (prop !== undefined) {
            if (prop.configurable) {
                Object.defineProperty(this, key, {
                    value: value,
                    configurable: true
                });
            } else {
                Object.defineProperty(this, key, {
                    value: value,
                    configurable: false
                });
            }
            if (prop.writable) {
                Object.defineProperty(this, key, {
                    value: value,
                    writable: true
                });
            } else {
                Object.defineProperty(this, key, {
                    value: value,
                    writable: false
                });
            }
            if (prop.enumerable) {
                Object.defineProperty(this, key, {
                    value: value,
                    enumerable: true
                });
            } else {
                Object.defineProperty(this, key, {
                    value: value,
                    enumerable: false
                });
            }
        }
        else {
            Object.defineProperty(this, key, {
                value: value
            });
        }
    }
}

const test = new Obj11();
test.setProp("prop1", 1, {writable: true, configurable: true, enumerable: true});
test.setProp("prop2", "value2");
console.log(`Ответ:`);
console.log(Object.getOwnPropertyDescriptor(test, "prop1"));
console.log(Object.getOwnPropertyDescriptor(test, "prop2"));

const s = 'fuckyou';
