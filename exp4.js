//Bài4: Lập trình hướng đối tượng.

class Staff {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;
    }
    setFullname = function(fullname) {
        this.fullname = fullname;
    }
    getFullname = function() {
        return this.fullname;
    }
    setEmail = function(email) {
        this.email = email;
    }
    getEmail = function() {
        return this.email;
    }
    toString = function() {
        return console.log(`Nhân viên có tên là: ${this.getFullname()} và email : ${this.getEmail()} `);
    }
}
let david = new Staff("David", "david@gmail.com");
david.setFullname("David Do");
david.setEmail("david.do.@gmail.com");
david.toString();
let staffs = [
    david,
    new Staff("Kevil", "kevil@gmail.com"),
    new Staff("Rain", "rain@gmail.com")
]
function displayListStaffs() {
    for(let i = 0; i < staffs.length; i++) {
        staffs[i].toString();
    }
}
displayListStaffs();