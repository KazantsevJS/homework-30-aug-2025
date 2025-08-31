
// Сортировка массива отключена (оставить без изменений)
Array.prototype.sort = (compareFn?: ((a: any, b: any) => number) | undefined): any[] => { return []; };

class Numbers {
    constructor(private readonly _array: number[]) {}

    get array() {
        return [...this._array]; // Почему мы просто не вернём this.array?
    }

    // Реализовать функцию: Меняет местами элементы с индексами index1 и index2
    swap(index1: number, index2: number) {
        
    }

    // Реализовать функцию: Сортирует массив в порядке возрастания
    sort(): void {
        
    }
}

// Код ниже менять не нужно:

{
const sortNumbers = new Numbers([ 3, 1, 2 ]);

sortNumbers
    .swap(0,1)
    .swap(2,1)
    .swap(1,1);

console.log('Swapped array:', sortNumbers.array); // [ 1, 2, 3 ]
}

{
const sortNumbers2 = new Numbers([ 3, 1, 2 ]);

sortNumbers2.sort();

console.log('Sorted array:', sortNumbers2.array); // [ 1, 2, 3 ]
}