class Sort {
    constructor(private _elements: any[]) {}

    get elements() {
        return this._elements;
    }

    // Метод сортировки с кастомной функцией сравнения
    sortBy(compareFn: (a: any, b: any) => number) {
        return new Sort([...this._elements].sort(compareFn));
    }

    // Метод для трансформации элементов (изменяет тип данных)
    mapElements(callback: (el: any) => any) {
        return new Sort(this._elements.map(callback));
    }
}

class Method {
    constructor(private _sort: Sort) {}

    get sort() {
        return this._sort;
    }

    transform(callback: (el: any) => any) {
        return new Method(this._sort.mapElements(callback));
    }
}

// Примеры использования:

{
    const sort = new Sort([3, 1, 2]);

    const sorted = sort.sortBy((a, b) => a - b); // Должен быть тип Sort<number>

    console.log(sorted.elements); // Должен вернуть [1, 2, 3], а тип быть number[]
}
{
    const sort = new Sort(["apple", "banana", "cherry"]);

    const sorted = sort.sortBy((a, b) => a.localeCompare(b)); // Должно вернуть Sort<string>

    console.log(sorted.elements); // Должен вернуть ['apple', 'banana', 'cherry'], а тип быть string[]
}
{
    const sort = new Sort(["1", "2", 3]);

    const method = new Method(sort);

    const numbers = method.transform(el => Number(el)); // Должно вернуть Method<number>

    console.log(numbers.sort.elements); // Должен вернуть [1, 2, 3], а тип быть number[]
}
