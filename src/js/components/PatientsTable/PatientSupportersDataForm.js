import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PatientSupportersDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time_format: 1,
            'tableName': 'PatientSupporters'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient ID"
                    type="number"
                    required
                    onChange={functions.onChange.bind(this, 'patient_id')}
                    
                />
                <SelectField
                    id="supporter-select"
                    label="Supporter Type"
                    className="md-cell"
                    menuItems={["Spouse", "Descendants", "Dependents", "Parents", "Siblings", "Friends", "Coworkers", "Roommates", "Other"]}
                    required
                    onChange={functions.onChange.bind(this, 'supporter_type')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Other Description"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'other_description')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Supporter Name"
                    maxLength={128}
                    required
                    onChange={functions.onChange.bind(this, 'supporter_name')}
                    
                />
            </DataForm>
        );
    }
}