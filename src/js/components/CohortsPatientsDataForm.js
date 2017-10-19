import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from './YesNoSelect';
import DataForm from './DataForm';
var functions = require('../DataFormFunctions').default;

export default class CohortsPatientsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'CohortsPatients'
        }
    }
    
    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cohort ID"
                    onChange={functions.onChange.bind(this, "cohort_id")}
                    required
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient ID"
                    onChange={functions.onChange.bind(this, "patient_id")}
                    required
                    
                />
            </DataForm>
        );
    }
}