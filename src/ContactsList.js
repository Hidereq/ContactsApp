import React, { Component } from "react";
import ContactItem from "./ContactItem";
import "./App.css";

class ContactsList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         contactItems: [
            <ContactItem key="Lena" login="typeofweb1" name="Lena" department="JavaScript Developer" border="0" />,
            <ContactItem key="Brian" login="typeofweb2" name="Brian" department="Human Resources" />,
            <ContactItem key="Rick" login="typeofweb3" name="Rick" department="QA" />
         ]
      };
   }

   render() {
      return <ul className="list-group list-group-flush container">{this.state.contactItems}</ul>;
   }

   addContactItem = () => {
      this.setState(prevState => ({
         contactItems: prevState.contactItems.concat([<ContactItem key="Rick" login="typeofweb3" name="Rick" department="QA" />])
      }));
   };
}

export default ContactsList;
