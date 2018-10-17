"use strict"

class AddressBook {
    constructor() {
        this.contacts =[];
    }
    add(info) {
        this.contacts.push(info);
        this.contacts.sort;
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}



let addressBook = new AddressBook();
