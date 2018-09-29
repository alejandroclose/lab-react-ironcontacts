import React, { Component } from "react";
import contacts from "../contacts.json";

class List extends Component {
  state = {
    list: contacts.slice(0, 5),

  };

  randomContact = () => {
    console.log("random");
    const {list} = this.state;
    const randomNum = Math.floor(Math.random() * Math.floor(contacts.length));
    list.push(contacts[randomNum]);
    console.log(list)
    this.setState({
      list
    })
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.randomContact();
          }}
        >
          Add random contact
        </button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {
              (this.state.list.map(contact => {
                return (
                  <tr key={contact.name}>
                    <td>
                      <img
                        src={contact.pictureUrl}
                        className="contact-pic"
                        alt="contact"
                      />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                  </tr>
                );
              }))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
