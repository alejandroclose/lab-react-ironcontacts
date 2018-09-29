import React, { Component } from "react";
import contacts from "../contacts.json";

class List extends Component {
  state = {
    list: contacts.slice(0, 5)
  };

  randomContact = () => {
    const { list } = this.state;
    const randomNum = Math.floor(Math.random() * Math.floor(contacts.length));
    list.push(contacts[randomNum]);
    console.log(list);
    this.setState({
      list
    });
  };

  sortByName = () => {
    const { list } = this.state;
    const points = (a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    };
    list.sort(points);
    this.setState({
      list
    });
  };

  sortByPopularity = () => {
    const { list } = this.state;
    const points = (a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      } else {
        return 0;
      }
    };
    list.sort(points);
    this.setState({
      list
    });
  };

  handleDelete = index => {
    console.log(index);
    const { list } = this.state;
    list.splice(index, 1);
    this.setState({
      list
    });
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
        <button
          onClick={() => {
            this.sortByName();
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => {
            this.sortByPopularity();
          }}
        >
          Sort by Popularity
        </button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {this.state.list.map((contact, index) => {
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
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
