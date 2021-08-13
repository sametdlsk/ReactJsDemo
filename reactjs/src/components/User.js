import React, { Component } from "react";


class User extends Component {
    onDeleteClick(id, e) {
        const { deleteUser } = this.props;

        deleteUser(id);
    }
    render() {
        const { id, name, surname, email, city, district } = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{city}</td>
                <td>{district}</td>
                <td><button onClick={this.onDeleteClick.bind(this, id)} className="btn btn-dark">Delete</button></td>
            </tr>




        )
    }
}
export default User;