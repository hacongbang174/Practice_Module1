// Bài 3:

let count = 0;
function findVowelCharacter(string, arr) {
    for(let i = 0; i < string.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(string.charAt(i) === arr[j]) {
                count += 1;
            }
        }
    }
    if(count > 0) {
        console.log(`Có ${count} số ký tự nguyên âm`);
    }else {
        console.log('false');
    }
}
let arr = ["a", "o", "e", "u", "i"]
let str = "hello"
findVowelCharacter(str,arr)
