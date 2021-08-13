import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends Component {

  constructor(props) {
    super(props)


    this.state = {
      users: [
        {
          id: 1,
          name: "Example",
          surname: "Example",
          city: "Example City",
          district: "Example District",
          email: "example@mail.com"
        },
        {
          id: 2,
          name: "Example 1",
          surname: "Example 1",
          city: "Example City 1",
          district: "Example District 1",
          email: "example1@mail.com"
        },
        {
          id: 3,
          name: "Example 2",
          surname: "Example 2",
          city: "Example City 2",
          district: "Example District 2",
          email: "example2@mail.com"
        }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  addUser(newUser) {
    let updatedUsers = this.state.users;

    updatedUsers.push(newUser);

    this.setState({
      users: updatedUsers
    });
  }

  deleteUser(id) {
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter(user => user.id !== id);

    this.setState({
      users: updatedUsers
    });

  }
  render() {
    return (

      <div className="container">
        <h4>SD Software</h4>
        <hr />
        <AddUser addUser={this.addUser} />
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
        <p className="lead">Bu klon Samet Dolaşık tarafından React.js kullanılarak eğitim amaçlı oluşturulmuştur. User ekleyebilir, silebilirsiniz, yenilendiği takdirde eski haline dönecektir.</p>
      </div>
    );
  }
}
export default App;
