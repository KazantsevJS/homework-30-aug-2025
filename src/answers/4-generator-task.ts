// Реализовал механиз итератора с использованием генератора
class BigData {
//   readonly data: number[] = Array(99999);
  readonly data: number[] = [1, 2, 3, 4, 5];// Для проверки я изменил содержание массива, что бы вывод в консоль был от 1 до 5, а не undefined 99999 раз


  *[Symbol.iterator]() {
    for (const item of this.data) {
      yield item;
    }
  }
}

const bigData = new BigData();

for (const items of bigData) {
  console.log(items);
}
