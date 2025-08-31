
/*
    Какой способ итерации предпочтительнее? 
    Какие особенности и какие могут быть проблемы? - приведите примеры
*/

const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for(const item of array) {
    console.log(item);
}

array.forEach((item) => {
    console.log(item);
});
