"use strict"

class AddressBook {
    constructor() {
        this.contacts =[];
    }
    add(info) {
        this.contacts.push(info);
        this.contacts.sort;
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
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
let aaron = new Contact ("Aaron", "schoeffa@gmail.com", "(248) 880-9849", "me");
let liz = new Contact ("Liz", "curby17@gmail.com", "(734) 645-3270", "fiance" );

addressBook.add(aaron);
addressBook.add(liz);

