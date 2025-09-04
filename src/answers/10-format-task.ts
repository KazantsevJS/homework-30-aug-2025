class Ref<T> {
  constructor(readonly id: T) {}
}

class User {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly productsId: Ref<number>[],
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
  new User(1, 'user1', [new Ref(1), new Ref(2)]),
  new User(2, 'user2', [new Ref(3), new Ref(4)]),
  new User(3, 'user3', [new Ref(5), new Ref(6)]),
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
function aggregateUsersWithProducts(users: User[], products: Product[]): any[] {
  const productMap = new Map<number, Product>();
  products.forEach((product) => {
    productMap.set(product.id, product);
  });

  return users.map((user) => {
    const userProducts = user.productsId.map((ref) => {
      const product = productMap.get(ref.id);
      if (!product) {
        throw new Error(`Product with id ${ref.id} not found`);
      }
      return product;
    });

    return {
      id: user.id,
      name: user.name,
      products: userProducts,
    };
  });
}

const result = aggregateUsersWithProducts(users, products);
console.log(result);
