import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';

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
                    label="Patient Therapy-Related Factors ID"
                    type="number"
                    onChange={this.handleChange.bind(this, 'patient_id')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Scientific Name"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'medication_scientific_name')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Generic Name"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'medication_generic_name')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Dosage"
                    maxLength={10}
                    type="number"
                    onChange={this.handleChange.bind(this, 'medication_dosage')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Dosage Units"
                    maxLength={32}
                    onChange={this.handleChange.bind(this, 'medication_dosage_units')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Route"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_route')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Frequency"
                    maxLength={3}
                    onChange={this.handleChange.bind(this, 'medication_freuqnecy')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Duration"
                    type="number"
                    onChange={this.handleChange.bind(this, 'medication_duration')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Duration Units"
                    maxLength={32}
                    onChange={this.handleChange.bind(this, 'medication_duration_units')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Previous Treatments"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'medication_previous_treatments')}
                />
                <TimePicker
                    id="appointment-time-auto"
                    label="Preferred Dosage Time 1"
                    className="md-cell"
                    onChange={this.handleChange.bind(this, 'preferred_dose_time_1')}
                />
                <TimePicker
                    id="appointment-time-auto"
                    label="Preferred Dosage Time 2"
                    className="md-cell"
                    onChange={this.handleChange.bind(this, 'preferred_dose_time_2')}
                />
                <TimePicker
                    id="appointment-time-auto"
                    label="Preferred Dosage Time 3"
                    className="md-cell"
                    onChange={this.handleChange.bind(this, 'preferred_dose_time_3')}
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