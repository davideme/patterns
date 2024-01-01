async function* gen(...nums) {
    for (const n of nums) {
        yield n;
    }
}

async function* sq(inStream) {
    for await (const n of inStream) {
        yield n * n;
    }
}

async function main() {
    for await (const n of sq(sq(gen(2, 3, 4)))) {
        console.log(n);
    }
}

main();
