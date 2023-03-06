//Bài 2:

let index = 0;
function findValueInArray(number, array) {
    for (let i = 0; i< array.length; i++) {
        if(number == array[i]) {
            index +=1;
        }
    }
    if(index == 0) {
        console.log(`Số ${number} vừa nhập không nằm trong mảng đã nhập`);
    }else {
        console.log(`Số ${number} vừa nhập nằm trong mảng đã nhập`);
    }
}

let arr = [2,5,6,1,9,10];
let num = 9;
findValueInArray(num,arr);