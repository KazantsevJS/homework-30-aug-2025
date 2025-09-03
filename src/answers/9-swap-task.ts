// Сортировка массива отключена (оставить без изменений)
Array.prototype.sort = (
  compareFn?: ((a: any, b: any) => number) | undefined,
): any[] => {
  return [];
};

class Numbers {
  constructor(private readonly _array: number[]) {}

  get array() {
    return [...this._array]; // Почему мы просто не вернём this.array?
    /*
    это защита от внешних изменений. Если вернуть this._array напрямую, то внешний код мог бы изменить наш внутренний массив, что нарушит инкапсуляцию и может привести к непредсказуемому поведению объекта.
   */
  }

  // Реализовать функцию: Меняет местами элементы с индексами index1 и index2
  swap(index1: number, index2: number): this {
    if (index1 === index2) {
      return this;
    }
    if (
      index1 < 0 ||
      index1 >= this._array.length ||
      index2 < 0 ||
      index2 >= this._array.length
    ) {
      throw new Error('Индексы выходят за пределы массива');
    }
    const result = this._array[index1];
    this._array[index1] = this._array[index2];
    this._array[index2] = result;
    return this;
  }

  // Реализовать функцию: Сортирует массив в порядке возрастания
  sort(): void {
    const length = this._array.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (this._array[j] > this._array[j + 1]) {
                this.swap(j, j + 1)
            }
        }
    }
  }
}

// Код ниже менять не нужно: 

{
  const sortNumbers = new Numbers([3, 1, 2]);

  sortNumbers.swap(0, 1).swap(2, 1).swap(1, 1);

  console.log('Swapped array:', sortNumbers.array); // [ 1, 2, 3 ]
}

{
  const sortNumbers2 = new Numbers([3, 1, 2]);

  sortNumbers2.sort();

  console.log('Sorted array:', sortNumbers2.array); // [ 1, 2, 3 ]
}
