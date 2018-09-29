import React, { Component } from "react";
import contacts from '../contacts.json';

class List extends Component {
  render() {
    return (
    <table>
      <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          </tr>
          { contacts.slice(0,5).map((contact)=>{
        return <tr key={contact.name}>
          <td><img src={contact.pictureUrl} className="contact-pic" alt="contact"/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          </tr>
      })}
      </tbody>
    </table>

    )}
}

export default List;
