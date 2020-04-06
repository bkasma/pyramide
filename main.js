function createPyramide (n) {
    console.log("Voici la pyramide :")
    for (var i = 0; i < n; i++) {
        var str = '';
        for (var j = 1; j < n - i; j++) {
            str = str + ' ';
        }
        for (var k = 1; k <= (2 * i + 1); k++) {
            str = str + '#';
        }
        
        console.log(str);
    }
}



var floor_nbr = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'etages veux-tu ?");
if(floor_nbr > 25) {
    floor_nbr = alert("le nombre d'etage ne doit pas depasser les 25 ! Encore une fois ;)");
} else {
    createPyramide(parseInt(floor_nbr));
}