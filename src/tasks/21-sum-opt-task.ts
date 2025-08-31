
/*
Напишите класс SumStack, который имеет следующие свойства:

push - добавляет элемент в конец стек
pop - удаляет последний элемент из стека
sum - возвращает сумму элементов в стеке
stack - возвращает стек
*/

class SumStack {
    // Реализуйте этот класс
}

// Ниже код менять не нужно

const sumStack = new SumStack([1, 2, 3]);

sumStack.push(4);

sumStack.stack[0] = 10;

sumStack.push(5);

console.log(sumStack.stack, sumStack.sum); // Должно вывести: [ 1, 2, 3, 4, 5 ] 15
