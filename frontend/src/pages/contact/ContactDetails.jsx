import React from "react";

function ContactDetails() {
  const pointOfContacts = [
    {
      id: 1,
      name: "Ray Scott",
      email: "ray@underbergcongregational.church",
      cellphone: "078 985 4123",
    },
    {
      id: 1,
      name: "Daniela Scott",
      email: "daniela@underbergcongregational.church",
      cellphone: "078 985 4123",
    },
    {
      id: 1,
      name: "Keith Barrow",
      email: "keith@barrowdale.co.za",
      cellphone: "078 985 4123",
    },
  ];
  const contactList = pointOfContacts.map((contact) => {
    const copyEmail = (contact) => {
      console.log(contact);
      navigator.clipboard.writeText(contact.email);
    };
    return (
      <li class="py-2">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8 rounded-full"
              src="https://i.pravatar.cc/300"
              alt="Neil image"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              {contact.name}
            </p>
            <p
              class="text-sm text-gray-500 truncate hover:cursor-pointer"
              onClick={() => copyEmail(contact)}
            >
              {contact.email}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900">
            {contact.cellphone}
          </div>
        </div>
      </li>
    );
  });

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">Contact us</h2>
          <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200">
              {contactList}
            </ul>
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
