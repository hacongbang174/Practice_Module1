//Bài 1: Giải phương trình bậc 2
function quadraticEquatio2 (a,b,c) {
    let delta = b*b - 4*a*c;
    if(delta < 0) {
        return console.log('Phương trình vô nghiệm');
    }else if (delta === 0) {
        let x = -b/(2*a);
        return console.log(`Phương trình có nghiệm kép x = ${x}`);
    }else {
        let x1 = (-b + Math.sqrt(delta))/(2*a);
        let x2 = (-b - Math.sqrt(delta))/(2*a)
        return console.log(`Phương trình có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
    }
}
quadraticEquatio2(8,12,-20)