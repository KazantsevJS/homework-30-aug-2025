/*
Напишите класс SumStack, который имеет следующие свойства:

push - добавляет элемент в конец стек
pop - удаляет последний элемент из стека
sum - возвращает сумму элементов в стеке
stack - возвращает стек
*/

class SumStack {
    // приватные поля
  private items: number[];
  private totalSum: number;

  constructor(initialArray: number[] = []) {
    this.items = [...initialArray];

    this.totalSum = 0;
    for (const item of this.items) {
      this.totalSum += item;
    }
  }

  // добавляю элемент в конец стека
  push(value: number): void {
    this.items.push(value);
    this.totalSum += value;
  }
  // удаляю последний элемент из стека
  pop(): number | undefined {
    const removeItem = this.items.pop();

    if (removeItem !== undefined) {
      this.totalSum -= removeItem;
    }
    return removeItem;
  }

  // геттер для получания суммы элементов
  get sum(): number {
    return this.totalSum;
  }

  // геттер для получения копии массива
  get stack(): number[] {
    return [...this.items];
  }
}

// Ниже код менять не нужно

const sumStack = new SumStack([1, 2, 3]);

sumStack.push(4);

sumStack.stack[0] = 10;

sumStack.push(5);

console.log(sumStack.stack, sumStack.sum); // Должно вывести: [ 1, 2, 3, 4, 5 ] 15
