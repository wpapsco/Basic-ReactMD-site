import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PatientSportsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'PatientSports'
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
                    id="age-select"
                    label="Age group"
                    defaultValue='Adult'
                    className="md-cell"
                    menuItems={["Adult", "Teenager", "Child"]}
                    onChange={functions.onChange.bind(this, 'age_group')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Sport Description"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, 'sport_description')}
                    
                />
            </DataForm>
        );
    }
}