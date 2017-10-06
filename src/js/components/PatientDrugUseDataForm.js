import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';

export default class PatientDrugUseDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Data submitted!");

        var obj = {}
        for (var param in this.state) {
            obj[param] = this.state[param];
        }
        obj.page = "PatientDrugUse";
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
                <h1 className="md-cell md-cell--12">Patient Drug Use Table Data Entry Form</h1>
                <br />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient ID"
                    type="number"
                    required
                    onChange={this.handleChange.bind(this, 'patient_id')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug Name"
                    maxLength={128}
                    required
                    onChange={this.handleChange.bind(this, 'drug_name')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug Use Count Per Frequency"
                    defaultValue="0"
                    type="number"
                    required
                    onChange={this.handleChange.bind(this, 'drug_count')}
                />
                <SelectField
                    id="age-select"
                    label="Drug Use Frequency"
                    className="md-cell"
                    defaultValue="PerMonth"
                    menuItems={['PerDay', 'PerHour', 'PerWeek', 'PerMonth', 'PerQuarter', 'PerYear']}
                    required
                    onChange={this.handleChange.bind(this, 'drug_frequency')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="How Long Since This Was Taken"
                    defaultValue="0"
                    type="number"
                    required
                    onChange={this.handleChange.bind(this, 'since_length')}
                />
                <SelectField
                    id="age-select"
                    label="Since Unit"
                    className="md-cell"
                    defaultValue="Years"
                    menuItems={['Hours', 'Days', 'Weeks', 'Months', 'Quarters', 'Years']}
                    required
                    onChange={this.handleChange.bind(this, 'since_unit')}
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