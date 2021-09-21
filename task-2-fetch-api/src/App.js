import { useEffect, useReducer } from "react";
import { getContacts } from "./apis/getContacts";
import "./App.css";
import { ContactContext } from "./contexts/ContactContext";

import SearchContacts from "./pages/SearchContacts";

const initialState = {
  loading: false,
  error: null,
  contacts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: true,
        error: null,
        contacts: action.payload,
      };
    case "FAILURE":
      return {
        loading: true,
        error: "Something went wrong",
        contacts: [],
      };
    default:
      return state;
  }
};

const App = () => {
  const [contactsState, dispatchContactState] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    getContacts()
      .then((_contacts) => {
        dispatchContactState({ type: "SUCCESS", payload: _contacts });
      })
      .catch(() => dispatchContactState({ type: "FAILURE" }));
  }, []);

  const contactApi = {
    contactsState,
  };

  return (
    <>
      <ContactContext.Provider value={contactApi}>
        <SearchContacts />
      </ContactContext.Provider>
    </>
  );
};

export default App;
