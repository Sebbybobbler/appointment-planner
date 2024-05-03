import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
    /*
  Define state variables for 
  contact info and duplicate check
  */
    const contacts = props.contacts;
    const addContact = props.addContact;
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [nameDuplicate, setNameDuplicate] = useState(false);

    useEffect(
        (name) => {
            contacts.forEach((contactObject) => {
                if (contactObject.name === name) {
                    setNameDuplicate(true);
                }
            });
        },
        [contacts, name]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
        if (nameDuplicate === false) {
            addContact(name, number, email);
            setName("");
            setNumber("");
            setEmail("");
        }
    };

    /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={name}
                    setname={setName}
                    number={number}
                    setnumber={setNumber}
                    email={email}
                    setEmail={setEmail}
                    nameduplicate={nameDuplicate}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList 
                contacts={contacts}
                />
            </section>
        </div>
    );
};
