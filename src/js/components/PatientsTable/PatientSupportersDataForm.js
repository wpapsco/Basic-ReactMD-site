import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';

export default class PatientSupportersDataForm extends React.Component {

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
        obj.page = "PatientSupporters";
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
                <h1 className="md-cell md-cell--12">Patient Supporters Table Data Entry Form</h1>
                <br />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient ID"
                    type="number"
                    required
                    onChange={this.handleChange.bind(this, 'patient_id')}
                />
                <SelectField
                    id="supporter-select"
                    label="Supporter Type"
                    className="md-cell"
                    menuItems={["Spouse", "Descendants", "Dependents", "Parents", "Siblings", "Friends", "Coworkers", "Roommates", "Other"]}
                    required
                    onChange={this.handleChange.bind(this, 'supporter_type')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Other Description"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'other_description')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Supporter Name"
                    maxLength={128}
                    required
                    onChange={this.handleChange.bind(this, 'supporter_name')}
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