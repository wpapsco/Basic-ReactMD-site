import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from './YesNoSelect'

export default class PatientDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'care_buddy_id': null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var obj = {}
        for (var param in this.state) {
            obj[param] = this.state[param];
        }
        obj.page = "Patient";
        if (obj.care_buddy_emergency_same == "Yes") {
            obj.care_buddy_id = null;
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://www.localhost:3000/save", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(obj));
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
        console.log(name);
        console.log(value);
    }

    render() {
        var careBuddyId = this.state.care_buddy_emergency_same == 'No' ? (
            <TextField
                id="floating-center-title"
                className="md-cell"
                label="Care Buddy Person ID"
                type="number"
                onChange={this.handleChange.bind(this, 'care_buddy_id')}
            />) : null;
        return (
            <form className="md-grid text-fields__application" onSubmit={this.handleSubmit.bind(this)}>
                <h1 className="md-cell md-cell--12">Patient Table Data Entry Form</h1>
                <br />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Person ID"
                    type="number"
                    required
                    onChange={this.handleChange.bind(this, 'person_id')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Forum Pseudonym"
                    maxLength={16}
                    required
                    onChange={this.handleChange.bind(this, 'forum_pseudonym')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Primary Physician's Name"
                    maxLength={64}
                    onChange={this.handleChange.bind(this, 'primary_physician')}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    type="number"
                    label="Emergency Contact Person ID"
                    onChange={this.handleChange.bind(this, 'emergency_contact_id')}
                />
                <SelectField
                    id="select-field-1"
                    label="Care Buddy == Emergency Contact?"
                    className="md-cell"
                    defaultValue="0"
                    menuItems={['Yes', 'No']}
                    required
                    onChange={this.handleChange.bind(this, 'care_buddy_emergency_same')}
                />
                {careBuddyId}
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