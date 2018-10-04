"use strict";

const test = a => {
    a.forEach((elem, index) => {
        if (elem === 3) {
            a.splice(index, 1);
        }
    });
};

const cut3 = array => {
    return array.filter(element => element !== 3);
};


let arr = [1, 3, 3, 1];
console.log(arr);
console.log(cut3(arr));
console.log(arr);
