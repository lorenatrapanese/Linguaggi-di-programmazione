/*
Clicca tenendo premuto Ctrl sul link di seguito per aprire il paragrafo su Notion
https://www.notion.so/4-3-Il-flusso-di-esecuzione-8ac85946771744fcb6766ff7cc46e5fe?pvs=4#190907169a804b33ad4923de0748e7d9
*/

function setup() {
    var voto = 6

    switch(voto) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("insufficiente");
            break;
        case 6:
            console.log("sufficiente");
            break;
        case 7:
            console.log("bene");
            break;
        case 8:
            console.log("buono");
            break;
        case 9:
            console.log("ottimo");
            break;
        case 10:
            console.log("distinto");
            break;
    }
}