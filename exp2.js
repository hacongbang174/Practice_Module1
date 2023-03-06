//Bài 2: Xây dựng hàm trả về vị trí phần tử cần tìm trong mảng cho trước

let count = 0;
let index = 0;
function findValueInArray(number, array) {
    for (let i = 0; i< array.length; i++) {
        if(number == array[i]) {
            count +=1;
            index = i;
        }
    }
    if(count == 0) {
        console.log(`Số ${number} vừa nhập không nằm trong mảng đã nhập`);
    }else {
        console.log(`Số ${number} vừa nhập nằm trong mảng đã nhập ở vị trí ${index}`);
    }
}

let arr = [2,5,6,1,9,10];
let num = 9;
findValueInArray(num,arr);