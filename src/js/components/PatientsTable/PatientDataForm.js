import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect'
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions.js').default;

export default class PatientDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Patient'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Person ID"
                    type="number"
                    required
                    onChange={functions.onChange.bind(this, 'person_id')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Forum Pseudonym"
                    maxLength={16}
                    required
                    onChange={functions.onChange.bind(this, 'forum_pseudonym')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Primary Physician's Name"
                    maxLength={64}
                    onChange={functions.onChange.bind(this, 'primary_physician')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    type="number"
                    label="Emergency Contact Person ID"
                    onChange={functions.onChange.bind(this, 'emergency_contact_id')}
                    
                />
                <YesNoSelect
                    id="select-field-1"
                    label="Care Buddy == Emergency Contact?"
                    className="md-cell"
                    onChange={functions.onChange.bind(this, 'care_buddy_emergency_same')}
                    required
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Care Buddy Person ID"
                    type="number"
                    onChange={functions.onChange.bind(this, 'care_buddy_id')}
                    
                />
            </DataForm>
        );
    }
}