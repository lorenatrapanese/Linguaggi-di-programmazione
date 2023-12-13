/*
Clicca tenendo premuto Ctrl sul link di seguito per aprire il paragrafo su Notion
https://www.notion.so/4-3-Il-flusso-di-esecuzione-8ac85946771744fcb6766ff7cc46e5fe?pvs=4#db1d928488e3470791dc4da147d1c180
*/

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