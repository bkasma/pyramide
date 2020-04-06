var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? \n", function (answer) {
    // TODO: Log the answer in a database


    if (answer > 25) {
        console.log("Le nombre d'étages ne doit pas dépasser 25! ");
    } else {
        console.log("Voici la pyramide :");
        for (var i = 0; i < answer; i++) {
            var str = '';
            for (var j = 1; j < answer - i; j++) {
                str = str + ' ';
            }
            for (var k = 1; k <= (2 * i + 1); k++) {
                str = str + '#';
            }
            console.log(str);
        }
    }

    rl.close();
});
