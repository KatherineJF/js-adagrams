const Adagrams = {
  drawLetters() {
    let letterPool = [
     'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
     'B', 'B',
     'C', 'C',
     'D', 'D', 'D', 'D',
     'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
     'F', 'F',
     'G', 'G', 'G',
     'H', 'H',
     'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
     'J',
     'K',
     'L', 'L', 'L', 'L',
     'M', 'M',
     'N', 'N', 'N', 'N', 'N', 'N',
     'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
     'P', 'P',
     'Q',
     'R', 'R', 'R', 'R', 'R', 'R',
     'S', 'S', 'S', 'S',
     'T', 'T', 'T', 'T', 'T', 'T',
     'U', 'U', 'U', 'U',
     'V', 'V',
     'W', 'W',
     'X',
     'Y', 'Y',
     'Z'
   ];

   let random = function random(items) {
          return items[Math.floor(Math.random()*items.length)];
    }

        let drawn = new Array()

        for (let i = 0; i < 10; i++) {
        let letter = random(letterPool);
          drawn.push(`${letter}`)
        }
        return drawn;
        },
// ['D', 'O', 'G', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
// ['D, O, G'];
  usesAvailableLetters(input,lettersInHand) {

    const inputarray = input.split('')
    input = inputarray.sort()
    let lettersInHandcopy = lettersInHand.slice();
    let isvalid = true
    inputarray.forEach(function(letter){
        if (lettersInHandcopy.includes(letter)){
          let index = lettersInHandcopy.indexOf(letter)
          lettersInHandcopy.splice(index,1)
           // console.log(`letter is ${letter}`);
           // console.log(`lettersInHand[letter] is ${lettersInHand[input]}`);
          }
        else {
          isvalid = false;
        }
    });
        return isvalid;
    },

     scoreWord(word) {

        let ScoreChart = {
               "A": 1,
              "E": 1,
              "I": 1,
              "O": 1,
              "U": 1,
              "L": 1,
              "N": 1,
              "R": 1,
              "S": 1,
              "T": 1,
              "D": 2,
              "G": 2,
              "B": 3,
              "C": 3,
              "M": 3,
              "P": 3,
              "F": 4,
              "H": 4,
              "V": 4,
              "W": 4,
              "Y": 4,
              "K": 5,
              "J": 8,
              "X": 8,
              "Q": 10,
              "Z": 10
            }
       return word.toUpperCase().split('').reduce((wordScore, letter) => {
         const letterScore = ScoreChart[letter];
         if(letterScore === undefined) {
           throw `${letter} is not in the English alphabet!`;
         }

         return wordScore + letterScore;
       }, word.length < 7 ? 0 : Adagrams.LENGTH_BONUS);
     },

     highestScoreFrom(words) {
       // This operates on "scored words" which are { word, score } objects
       const comparer = (left, right) => {
         // Select the word with best score
         if(left.score > right.score) return left;
         if(left.score < right.score) return right;

         // Return left if they have the same length
         if(left.word.length === right.word.length) return left;

         // Return either if they have 10 letters
         if(left.word.length === 10) return left;
         if(right.word.length === 10) return right;

         // Return the word with the fewest letters
         if(left.word.length < right.word.length) return left;
         return right;
       };

       return words.map((word) => ({
         word,
         score: Adagrams.scoreWord(word),
       })).reduce(comparer);
     },
   }

// Do not remove this line or your tests will break!
export default Adagrams;
