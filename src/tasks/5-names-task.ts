// 5

// Требуется подобрать соответствующие названия переменным, функциям, методам и тд...

type Callback<T> = (event: T) => void;

class E<T> {
  private ss = new Set<Callback<T>>();

  s(c: Callback<T>) {
    this.ss.add(c);

    return c;
  }

  u(c: Callback<T>) {
    return this.ss.delete(c);
  }

  e(v: T) {
    for (const s of this.ss) {
      s(v);
    }
  }
}

const e = new E<number>();

const s = e.s((v) => {
  console.log(v);
});

e.e(5);

e.u(s);

e.e(10);
