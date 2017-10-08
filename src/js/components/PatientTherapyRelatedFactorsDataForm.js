import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';

export default class PatientTherapyRelatedFactorsDataForm extends React.Component {

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
        obj.page = "TherapyRelatedFactors";
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
                <h1 className="md-cell md-cell--12">Patient Therapy-Related Factors Table Data Entry Form</h1>
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
                    label="Side Effects Frequency"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'side_effects_freq')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Side Effect Previous Frequency"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'side_effect_prev_freq')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Nedication Bad Taste"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_bad_taste')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication GI Upset"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_gi_upset')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Acne"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_acne')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Changes Skin Color"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_change_skin_color')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Sleep Excessive"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_sleep_excessive')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Nightmares"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_nightmares')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Grip Weak"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_grip_weak')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Headaches"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_headaches')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication 3AM"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_3am')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Cold"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_cold')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Guest Bath"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_guest_bath')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication 50 Miles"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_50_miles')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Improves Symptoms"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_improves_symptoms')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Makes No Difference"
                    type="number"
                    maxLength={2}
                    onChange={this.handleChange.bind(this, 'medication_makes_no_difference')}
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