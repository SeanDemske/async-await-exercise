// 1
async function part1() {
    let resp = await $.getJSON("http://numbersapi.com/random/year?json");
    console.log(resp);
}
part1();


// 2
async function part2() {
    let resp = await $.getJSON("http://numbersapi.com/1..3,10?json")
    console.log(resp);
}
part2();

// 3
async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`http://numbersapi.com/10?json`))
    );
    console.log(facts);
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
}
part3();
