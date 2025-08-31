
// Сделать рабочим - поправить ошибки ниже:

class Country {
    constructor(readonly name: string) {}

    get code () {
        return 643;
    }
}

class User {
    constructor(
        readonly name: string,
        readonly age: number,
        readonly country: Country,
    ) {}

    parseCountry(country: { name: string } ) {
        return country.name;
    }

    static fromObject(obj: User): User {
        this.name = obj.name;
        this.age = obj.age;
        this.country = this.parseCountry(obj.country);

        return this;
    }
}

// Не нужно менять:
const user = User.fromObject({
    name: "Artem",
    age: 24,
    country: {
        name: "Russia",
        code: 643
    }
});
