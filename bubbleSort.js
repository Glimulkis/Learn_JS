"use strict";

const bubbleSort = array => {
    if (array.length < 2) {
        return array;
    }

    const iter = (cycle, acc) => {
        if (cycle === 0) {
            return acc;
        }
        const howToSort = acc.map((value, index) => {
            return (acc[index] > acc[index + 1])
                ? acc[index] = [acc[index+1], acc[index+1] = acc[index]][0]
                    : acc[index];
        });
        return iter(cycle-1, howToSort);

    };

    return iter(array.length, array);
};


let arr = [2, 1, 5 ,1, 0];
console.log(arr);
console.log(bubbleSort(arr));
console.log(arr);