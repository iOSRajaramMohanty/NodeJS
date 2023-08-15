/*
*   Person class
*/
class Person {

    constructor(id, name, dob) {
        this.id = id;
        this.name = name;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getIdName() {
        return `${this.id} ${this.name}`;
    }
}

module.exports = {
    Person
}
