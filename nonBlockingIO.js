// WARNING: Do not edit the code outside the region BEGIN and END mentioned below. If you do so, the test cases may not pass.
 
// Read the variable from STDIN
process.stdin.on('data', function(chunk) {
    let lines = chunk.toString().split('\n');
    let score1 = parseInt(lines[0]);
    let score2 = parseInt(lines[1]);

    const loading = () => {
        setTimeout(() =>{
            console.log('Loading score...')
        }, 1000)
    }
     
    // DONE 2: Wrote a function named 'displayScore' to log score after 2 seconds on to console
    /**
     * Function to display score of Arsenal and Liverpool after 2 seconds
     * @param {Number} score1 - score secured by Arsenal
     * @param {Number} score2 - score secured by Liverpool
     * Note that the score must be displayed in the format given in the problem description.
     */
    const displayScore = (score1, score2) => {
        setTimeout(() =>{
            console.log(`Arsenal ${score1}-${score2} Liverpool`)
        }, 2000)
    }
   
    // END: Write all your code above this line
    
    loading();
    displayScore(score1, score2);
});