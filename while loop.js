function setup() {
    var a = 42
    var b = 15

    while (a > b) {
        a = a - 10
        b = b + 5
    }

    console.log("a: " + a)
    console.log("b: " + b)
}