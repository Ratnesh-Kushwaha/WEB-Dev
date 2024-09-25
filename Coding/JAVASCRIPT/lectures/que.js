let Data = "Information";

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data=", Data)
    }
}

class adimin extends user {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        Data = "some value. new"
    }
}

let stu1 = new user("ram", "ram@xyz.com")

let admin1 = new adimin("adminAuthority", "admin@admin.com")