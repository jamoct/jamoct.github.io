var str = 'Antonello Sanna Likes videoGames';

function howManyCaps (str) {
        
        var letters = str.split('');
        var capletters = [];

         for (var i=0; i<letters.length; i++) {
                if (letters[i] == letters[i].toUpperCase() && letters[i] !== ' ') {
                        capletters.push(str[i]); // A,S,L,G because it is an array
                } 
         }

         return 'There are ' + capletters.length + ' capitals and these are ' + capletters;
}
