const key = {
    a: 'q', b: 'w', c: 'e',
    d: 'r', e: 't', f: 'y',
    g: 'u', h: 'i', i: 'o',
    j: 'p', k: 'a', l: 's',
    m: 'd', n: 'f', o: 'g',
    p: 'h', q: 'j', r: 'k',
    s: 'l', t: 'z', u: 'x',
    v: 'c', w: 'v', x: 'b',
    y: 'n', z: 'm', A: "1",
    B: "2", C: "3", D: "4",
    E: "5", F: "6", G: "7",
    H: "8", I: "9", J: "Q",
    K: "W", L: "E", M: "R",
    N: "T", O: "Y", P: "U",
    Q: "I", R: "O", S: "P",
    T: "A", U: "S", V: "D",
    W: "F", X: "G", Y: "H",
    Z: "J", "!": "$", "?" : "%",
    ".": "@"
}

const encode = str => {
    finalTxt = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            finalTxt += ' '
            continue
        }
        finalTxt += key[str[i]]
    }
    console.log(finalTxt)
}

encode("I love cryptography!")

// const decode = str => {
//     finalTxt = ''
//     for(let i = 0; i < str.length; i ++){
//         if (str[i] === ' '){
//             finalTxt += ' '
//             continue
//         }
//     Object.entries(key).forEach(([key, value]) => {
//         if(str[i] === value){
//             finalTxt += key
//         }
//     })
//     }
//         console.log(finalTxt)
// }

// decode("9 sgct eknhzgukqhin$")


