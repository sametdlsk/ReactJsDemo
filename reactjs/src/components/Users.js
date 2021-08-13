import React, { Component } from "react";
import User from "./User";

class Users extends Component {

    render() {
        const { users, deleteUser } = this.props;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">SURNAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">CITY</th>
                        <th scope="col">DISTRICT</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        const { id, name, surname, email, city, district } = user;
                        return <User
                            key={id}
                            id={id}
                            name={name}
                            surname={surname}
                            email={email}
                            city={city}
                            district={district}
                            deleteUser={deleteUser}
                        />
                    })
                    }
                </tbody>
            </table>
        );
    }
}
export default Users;