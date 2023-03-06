//Bài4:
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
let staff = new Staff("David", "david@gmail.com");
staff.setFullname("David Do");
staff.setEmail("david.do.@gmail.com");
staff.toString();
let staffs = [
    new Staff("David", "david@gmail.com"),
    new Staff("Kevil", "kevil@gmail.com"),
    new Staff("Rain", "rain@gmail.com")
]
function displayStaffs() {
    for(let i = 0; i < staffs.length; i++) {
        staffs[i].toString();
    }
}
displayStaffs();