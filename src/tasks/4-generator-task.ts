
class BigData {
    readonly data: number[] = Array(99999);
}

const bigData = new BigData();

// Реализуйте данный механизм с использованием итератора и генератора
for(const items of bigData) {
    console.log(items);
}
