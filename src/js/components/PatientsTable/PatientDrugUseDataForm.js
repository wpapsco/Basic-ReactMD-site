import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class PatientDrugUseDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'PatientDrugUse'
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
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug Name"
                    maxLength={128}
                    required
                    onChange={functions.onChange.bind(this, 'drug_name')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug Use Count Per Frequency"
                    defaultValue="0"
                    type="number"
                    required
                    onChange={functions.onChange.bind(this, 'drug_count')}
                    
                />
                <SelectField
                    id="age-select"
                    label="Drug Use Frequency"
                    className="md-cell"
                    defaultValue="PerMonth"
                    menuItems={['PerDay', 'PerHour', 'PerWeek', 'PerMonth', 'PerQuarter', 'PerYear']}
                    required
                    onChange={functions.onChange.bind(this, 'drug_frequency')}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="How Long Since This Was Taken"
                    defaultValue="0"
                    type="number"
                    required
                    onChange={functions.onChange.bind(this, 'since_length')}
                    
                />
                <SelectField
                    id="age-select"
                    label="Since Unit"
                    className="md-cell"
                    defaultValue="Years"
                    menuItems={['Hours', 'Days', 'Weeks', 'Months', 'Quarters', 'Years']}
                    required
                    onChange={functions.onChange.bind(this, 'since_unit')}
                    
                />
            </DataForm>
        );
    }
}