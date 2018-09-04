import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "mr. cat",
        email: "meow@gmail.com",
        phone: "2342342"
      },
      {
        id: 2,
        name: "mrs. pussy cat",
        email: "bark@gmail.com",
        phone: "2342r57894570uy342"
      },
      {
        id: 3,
        name: "mrs. woof",
        email: "barfdsdk@gmail.com",
        phone: "2342r57894570uy342"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
