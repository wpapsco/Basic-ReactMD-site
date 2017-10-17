import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import DataForm from './DataForm';

export default class PersonDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display_ssn: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.birthdate);
        alert("Data submitted!");

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://www.localhost:3000/save", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
            'page': "Persons",
            first_name: this.state.first_name,
            middle_name: this.state.middle_name,
            last_name: this.state.last_name,
            nick_name: this.state.nick_name,
            ssn: this.state.ssn,
            gender: this.state.gender,
            birthdate: this.state.birthdate
        }));
    }

    handleChange = (name, value) => {
        if (name == 'ssn') {
            var ssn = value.replace(/[^0-9.]/g, "");
            this.setState({
                "ssn": ssn
            });
            var display_ssn = ssn;
            if (ssn.length > 5) {
                display_ssn = ssn.slice(0, 3) + "-" + ssn.slice(3, 5) + "-" + ssn.slice(5, 9);
                console.log('test2');
            } else if (ssn.length > 3) {
                display_ssn = ssn.slice(0, 3) + "-" + ssn.slice(3)
                console.log('test');
            }
            this.setState({
                "display_ssn": display_ssn
            });


        } else {
            this.setState({
                [name]: value
            });
        }


        console.log(value);
    }

    render() {
        return (
            <form className="md-grid text-fields__application" onSubmit={this.handleSubmit.bind(this)}>
                <h1 className="md-cell md-cell--12">Person Table Data Entry Form</h1>
                <br />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="First Name"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'first_name')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Middle Name"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'middle_name')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Last Name"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'last_name')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Nickname"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'nick_name')}
                />
                <TextField
                    value={this.state.display_ssn}
                    id="floating-center-title"
                    className="md-cell"
                    label="SSN"
                    onChange={this.handleChange.bind(this, 'ssn')}
                />
                <SelectField
                    id="gender-select"
                    label="Gender"
                    placeholder="Gender"
                    className="md-cell"
                    menuItems={["Male", "Female", "Prefer not to answer/Other"]}
                    onChange={this.handleChange.bind(this, 'gender')}
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Birthdate"
                    className="md-cell"
                    onChange={this.handleChange.bind(this, 'birthdate')}
                />
                <Button flat
                    id=""
                    className="md-cell md-cell--12 md-cell--bottom md-cell--right"
                    onClick={this.handleSubmit.bind(this)} >
                    Submit
                </Button>
            </form>
        );
    }
}