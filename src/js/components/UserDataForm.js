import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';

export default class UserDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time_format: 1
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Data submitted!");

        var obj = {}
        for (var param in this.state) {
            obj[param] = this.state[param];
        }
        obj.page = "Users";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://www.localhost:3000/save", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(obj));
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
        console.log(value);
    }

    render() {
        return (
            <form className="md-grid text-fields__application" onSubmit={this.handleSubmit.bind(this)}>
                <h1 className="md-cell md-cell--12">User Table Data Entry Form</h1>
                <br />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="User Type ID"
                    maxLength={2}
                    required
                    onChange={this.handleChange.bind(this, 'user_type_id')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Fourm Pseudonym"
                    maxLength={64}
                    required
                    onChange={this.handleChange.bind(this, 'pseudonym')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Attached Person ID"
                    type="number"
                    required
                    onChange={this.handleChange.bind(this, 'person_id')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Time Zone"
                    maxLength={2}
                    required
                    onChange={this.handleChange.bind(this, 'time_zone')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Date Format"
                    maxLength={1}
                    onChange={this.handleChange.bind(this, 'date_format')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Time Format"
                    type="number"
                    defaultValue="1"
                    maxLength={1}
                    onChange={this.handleChange.bind(this, 'time_format')}
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