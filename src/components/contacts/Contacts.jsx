import React from 'react';

const Contacts = () => {
    const contacts = [
      { name: "Марія", phone: "123-45-67" },
      { name: "Олег", phone: "987-65-43" },
      { name: "Іра", phone: "555-11-22" },
    ];

    return (
        <ol>
            {contacts.map(contact => <li>{contact.name}: { contact.phone }</li> )}
        </ol>
    );
}

export default Contacts;
