const tossCoin = () => { return Math.random() > 0.5 ? "heads" : "tails"; }

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log(fiveHeadsSync());
// console.log( "This is run after the fiveHeadsSync function completes" );

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let attempts = 0, headsCount = 0
        while (headsCount < 5) {
            attempts++
        const result = tossCoin()
        result == "heads" ? headsCount++ : headsCount = 0
            console.log(`${result} was flipped`)
            if (attempts > 100) {
                reject(`Attempts exceeds 100`)
            }
        }
        resolve(`It took ${attempts} tries to flip five "heads"`)
    })
};
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err))

console.log("when does this run now?");