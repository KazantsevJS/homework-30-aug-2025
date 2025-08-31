
class Ref<T> {
    constructor(readonly id: number) {}
}

class User {
    constructor(
        readonly id: number, 
        readonly name: string, 
        readonly productsId: Ref<Product>,
    ) {}
}

class Product {
    constructor(
        readonly id: number, 
        readonly name: string, 
        readonly price: number,
    ) {}
} 

const users = [
    new User(1, 'user1', [1, 2]),
    new User(2, 'user2', [3, 4]),
    new User(3, 'user3', [5, 6]),
];

const products = [
    new Product(1, 'product1', 100),
    new Product(2, 'product2', 200),
    new Product(3, 'product3', 300),    
    new Product(4, 'product4', 400),
    new Product(5, 'product5', 500),
    new Product(6, 'product6', 600), 
];

// Требуется написать функцию, которая возвращает новый массив, выполняя агрегацию, в котором вместо id продуктов будут сами продукты:
