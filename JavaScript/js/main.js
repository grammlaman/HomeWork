let arr = ['Earth','Asia','Kazakstan','Karagandy','Alihanov st.','37','office 627'];

//  Создание связанного списка через цикл
function createList(arr){
    let intArr = [];
    let resObj = {};
    for(let i = 0; i < arr.length; i++) {
        let intObg = {
            value: arr[i],
            next: null
        };
        intArr[i] = intObg;
        if(i>0){
            intArr[i-1].next = intArr[i];
        }
        resObj = intArr[0]
    }
    return resObj;
}

//  Создание связанного списка через рекурсию
function createList(arr) {
    let resObj = {};
    if (arr.length == 1) {
        resObj = {
            value: arr[0],
            next: null
        };
        return resObj;
    } else {
        resObj.value = arr[0];
        arr.shift();
        resObj.next = createList(arr);
        return resObj;
    }
}
let resObj = createList(arr);

//  Создание массива из связанного списка
function pushArr(obj) {
    let objArr = [];
    let i = 0;
    while (obj.next) {
        objArr[i] = obj;
        obj = obj.next;
        i++;
        if(!obj.next){
            objArr[i] = obj;
            break;
        }
    }
    return objArr;
}

//  Извлечение объекта из связанного списка
function nthObj(obj,number = 1) {
    if (number >= 1) {
        let arr = pushArr(obj);
        if (number <= arr.length){
            let intObj = arr[number - 2];
            return intObj;
        }
        else return "Связанный список короче чем ваш запрос"
    } else {
        return "Вы ввели неправильный запрос"
    }
}

//  Создание массива value из связанного списка
function pushValueArr(obj) {
    let objArr = [];
    let i = 0;
    while (obj.next) {
        objArr[i] = obj.value;
        obj = obj.next;
        i++;
        if(!obj.next){
            objArr[i] = obj.value;
            break;
        }
    }
    return objArr;
}

//  Разворот связанного списка в обратную сторону
function reverseObj(obj) {
    let arr = pushValueArr(obj);
    arr.reverse();
    let revObj = createList(arr);
    return revObj;
}
let revObj = reverseObj(resObj);
console.log(revObj);