import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from './YesNoSelect';

export default class PatientMedicationsDataForm extends React.Component {

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
        obj.page = "PatientMedications";
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
                <h1 className="md-cell md-cell--12">Patient Medications Table Data Entry Form</h1>
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
                    label="CuraCast Location"
                    maxLength={32}
                    onChange={this.handleChange.bind(this, 'curacast_location')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="CuraCast Location Other"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'curacast_location_other')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Phone Brand And Model"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'mobile_phone_brand_and_model')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Phone Carrier"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'mobile_phone_carrier')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Phone Carrier Account"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'mobile_phone_carrier_account')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Electricity Provider"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'electricity_provider')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Electricity Account"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'electricity_account')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Internet Provider"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'internet_provider')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Internet Account"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'internet_account')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Children Under 18"
                    maxLength={2}
                    type="number"
                    onChange={this.handleChange.bind(this, 'children_under_18')}
                />
                <YesNoSelect
                    id="pet-select"
                    label="Do you have pets?"
                    onChange={this.handleChange.bind(this, 'has_pets')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Individuals In Household"
                    maxLength={2}
                    type="number"
                    onChange={this.handleChange.bind(this, 'individuals_count')}
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