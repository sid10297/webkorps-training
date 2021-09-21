import { useContext, useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Contact from "../components/Contact";
import Search from "../components/SearchBar";
import { ContactContext } from "../contexts/ContactContext";

const SearchContacts = () => {
  const { contactsState } = useContext(ContactContext);
  const [textValue, setTextValue] = useState("");

  const filteredContacts = contactsState.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(textValue.toLowerCase())
  );

  return (
    <div className="App">
      <Search setTextValue={setTextValue} textValue={textValue} />
      <div>
        <br />
        {!contactsState.loading ? (
          <Loader color="white" type="TailSpin" />
        ) : null}
        {contactsState.error
          ? contactsState.error
          : filteredContacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
      </div>
    </div>
  );
};

export default SearchContacts;
