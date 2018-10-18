"use strict"

class AddressBook {
    constructor() {
        this.contacts = [new Contact("Einstein", "ein@thestein.me", "299.792.4580", "Hero"), new Contact("Euler", "leonhard@euler.net", "271.828.1828", "Hero"), new Contact("Jenny", "jenny@neverforget.com", "313.867.5309", "Friend")];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    deleteByName(name) {
        for (let person of this.contacts) {
            if (person.name === name) {
                this.contacts.splice(this.contacts.indexOf(person), 1);
            }
        }

    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(`${i}. ${this.contacts[i].name} P: ${this.contacts[i].phone} E: ${this.contacts[i].email} R: ${this.contacts[i].relation}`);
        }
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

let choice;
switch (choice) {
    case "add":
        let name = prompt("Name?");
        let email = prompt("Email?");
        let phone = prompt("Phone?");
        let relation = prompt("Relation?");
        addressBook.add(new Contact(name, email, phone, relation));
        break;
    case "delete":
        let delType = prompt("Delete by index or name?");
        if (delType === "index") {
            addressBook.deleteAt(prompt("Index to delete?"));
        } else if (delType === "name") {
            addressBook.deleteByName(prompt("Name of contact to delete?"));
        }
        break;
    case "print":
        addressBook.print();
        break;
    case "quit":
        console.log("Farewell.");
        looper = false;
        break;
    default:
        break;

}