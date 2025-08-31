
async function functionThrow() {
    throw new Error("Function throw!");
}

// Есть код с ошибкой:
async () => {
    while (true) {
        await functionThrow();
    }
};

// В чём особенности обработки ошибок каждого из вариантов и какой у них будет вывод?

// 1 вариант:
try {

    (async () => {
        while (true) {
            await functionThrow();
        }
    })();

} catch (error) {
    console.log(error);
}

// 2 вариант:

(async () => {

    try {

        while (true) {
            await functionThrow();
        }

    } catch (error) {
        console.log(error);
    }

})();

// 3 вариант:

(async () => {
    while (true) {

        try {
            await functionThrow();
        } catch (error) {
            console.log(error);
        }

    }
})();
