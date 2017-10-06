import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';

export default class PatientDemographicFactorsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var obj = {}
        for (var param in this.state) {
            if (param == 'treatment_travel') {
                obj.treatment_travel = this.state[param] == 'Yes';
            } else {
                obj[param] = this.state[param];
            }
        }
        if (!obj.treatment_travel) {
            obj.travel_plans = null;
        }
        obj.page = "PatientDemographicFactors";
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
                <h1 className="md-cell md-cell--12">Patient Demographic Factors Table Data Entry Form</h1>
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
                    label="Employer Name"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'employer_name')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Supervisor Name"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'supervisor_name')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Occupation"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'occupation')}
                />
                <TextField //Should probably be a selectfield
                    id="floating-center-title"
                    className="md-cell"
                    label="Race"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'race')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Race Other"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'race_other')}
                />
                <TextField
                    id="floating-center-title" //Should also be a select field prolly
                    className="md-cell"
                    label="Ethnicity"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'ethnicity')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Ethnicity Other"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'ethnicity_other')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Device Brand"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'mobile_device_brand')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Device Model"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'mobile_device_model')}
                />
                <SelectField
                    id="select-field-1"
                    label="Mobile Phone Style"
                    className="md-cell"
                    menuItems={['Touchscreen style', 'Flip style']}
                    onChange={this.handleChange.bind(this, 'mobile_phone_style')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Mobile Device Carrier"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'mobile_device_carrier')}
                />
                <TextField
                    id="floating-center-title" //again maybe needs a selectfield
                    className="md-cell"
                    label="Curacast Device Placement"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'curacast_device_placement')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Curacast Device Placement Other"
                    maxLength={128}
                    onChange={this.handleChange.bind(this, 'curacast_device_placement_other')}
                />
                <SelectField
                    id="select-field-2"
                    label="Travelling During Treatment?"
                    className="md-cell"
                    defaultValue="No"
                    menuItems={['Yes', 'No']}
                    onChange={this.handleChange.bind(this, 'treatment_travel')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Travel Plans"
                    maxLength={512}
                    onChange={this.handleChange.bind(this, 'travel_plans')}
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