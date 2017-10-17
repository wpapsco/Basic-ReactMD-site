import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect'
import DataForm from '../DataForm';

export default class PatientDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="Patient" onSubmit={this.props.onSubmit}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Person ID"
                    type="number"
                    required
                    name='person_id'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Forum Pseudonym"
                    maxLength={16}
                    required
                    name='forum_pseudonym'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Primary Physician's Name"
                    maxLength={64}
                    name='primary_physician'
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    type="number"
                    label="Emergency Contact Person ID"
                    name='emergency_contact_id'
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="select-field-1"
                    label="Care Buddy == Emergency Contact?"
                    className="md-cell"
                    name='care_buddy_emergency_same'
                    required
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Care Buddy Person ID"
                    type="number"
                    name='care_buddy_id'
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}