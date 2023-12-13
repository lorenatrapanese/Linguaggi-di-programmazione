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