"use strict";

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(person) {
        this.contacts.push(person);

        // Creates elements used to display contacts on screen
        const contactBubble = document.createElement("section");
        const content = document.createElement("p");
        const del = document.createElement("section");
        const trash = document.createElement("img");

        trash.src = "images/baseline-delete-24px.svg";
        del.appendChild(trash);

        // Generates content to fill contact display
        content.innerText = `Name: ${person.name}
        Email: ${person.email}
        Phone: ${person.phone}
        Relation: ${person.relation}`;

        // Appends content and trash icon to create contact display
        contactBubble.appendChild(content);
        contactBubble.appendChild(del);

        // Creates style rules for contact display
        contactBubble.style.backgroundColor = "rgba(255, 255, 255, 0.8";
        contactBubble.style.padding = "15px";
        contactBubble.style.borderRadius = "5px";
        contactBubble.style.width = "auto";
        contactBubble.style.margin = "20px";

        // Creates style rules for trash element
        del.style.border = "2px solid black";
        del.style.width = "24px";
        del.style.height = "24px";
        del.style.borderRadius = "50%";
        del.style.backgroundColor = "rgba(255, 255, 255, 0.8"
        del.style.position = "relative";
        del.style.left = "100%";
        del.style.bottom = "-25px";
        del.className = "delIcon";

        // Sets up DOM manipulation for deletion click event
        del.addEventListener("click", () => {
            let slide = document.getElementById("slide");
            let parentSection = del.parentNode.parentNode;

            function playSlide() {
                slide.play()
            }

            // Removes element upon clicking trash icon
            parentSection.removeChild(del.parentNode);
            this.deleteByName(person.name);
            playSlide();
        });

        // Adds contact display to html
        document.querySelector(".contactList").appendChild(contactBubble);
    }

    //  Method used to delete contact information from contact array
    deleteByName(name) {
        for (let person of this.contacts) {
            if (person.name === name) {
                this.contacts.splice(this.contacts.indexOf(person), 1);
            }
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

// Creates initialized contacts for address book
let addressBook = new AddressBook();
const einstein = new Contact("Einstein", "ein@thestein.me", "299.792.4580", "Hero");
const euler = new Contact("Euler", "leonhard@euler.net", "271.828.1828", "Hero");
const jenny = new Contact("Jenny", "jenny@neverforget.com", "313.867.5309", "Friend");
addressBook.add(einstein);
addressBook.add(euler);
addressBook.add(jenny);

// Creates functionality for adding a contact when clicking add button
document.querySelector("#addContact").addEventListener("click", () => {
    let person = document.querySelectorAll(".contactsInput");
    let bubble = document.getElementById("bubble");

    function playBubble() {
        bubble.play();
    }

    const newContact = new Contact(person[0].value, person[1].value, person[2].value, person[3].value);
    addressBook.add(newContact);
    playBubble();

    for (let input of document.querySelectorAll(".contactsInput")) {
        input.value = "";
    }
});