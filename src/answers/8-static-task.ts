// Сделать рабочим - поправить ошибки ниже:
{
  class Country {
    constructor(readonly name: string) {}

    get code() {
      return 643;
    }
  }

  class User {
    constructor(
      readonly name: string,
      readonly age: number,
      readonly country: Country,
    ) {}

    static parseCountry(country: { name: string }): Country {
      return new Country(country.name);
    }

    static fromObject(obj: {
      name: string;
      age: number;
      country: { name: string; [key: string]: any };
    }): User {
      const country = User.parseCountry(obj.country);
      return new User(obj.name, obj.age, country);
    }
  }

  // Не нужно менять:
  const user = User.fromObject({
    name: 'Artem',
    age: 24,
    country: {
      name: 'Russia',
      code: 643,
    },
  });
}
