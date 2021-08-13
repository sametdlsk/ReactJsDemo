import React, { Component } from "react";

class AddUser extends Component {


    state = {
        name: "",
        surname: "",
        email: "",
        city: "",
        district: ""

    };
    onNameChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSurnameChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    onEmailChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    onCityChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    onDistrictChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    onAddSubmit(e) {
        const { addUser } = this.props;
        const { name, surname, email, city, district } = this.state;


        const newUser = {
            id: Math.random(),
            name: name,
            surname: surname,
            email: email,
            city: city,
            district: district
        };
        addUser(newUser);
        e.preventDefault();
    }
    render() {
        const { name, surname, email, city, district } = this.state;
        return (
            <div className="card">
                <h4 className="card-header">Add New User</h4>
                <div className="card-body">
                    <form onSubmit={this.onAddSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Name"
                                className="form-control"
                                value={name}
                                onChange={this.onNameChange.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Surname</label>
                            <input
                                type="text"
                                name="surname"
                                id="surname"
                                placeholder="Enter Surname"
                                className="form-control"
                                value={surname}
                                onChange={this.onSurnameChange.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter Email"
                                className="form-control"
                                value={email}
                                onChange={this.onEmailChange.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                placeholder="Enter City"
                                className="form-control"
                                value={city}
                                onChange={this.onCityChange.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="district">District</label>
                            <input
                                type="text"
                                name="district"
                                id="district"
                                placeholder="Enter District"
                                className="form-control"
                                value={district}
                                onChange={this.onDistrictChange.bind(this)}
                            />
                        </div>
                        <button type="submit" className="btn btn-dark btn-block" >Add New User</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default AddUser;