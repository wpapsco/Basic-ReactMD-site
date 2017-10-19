import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import YesNoSelect from './YesNoSelect';
import DataForm from './DataForm';
var functions = require('../DataFormFunctions').default;

export default class CohortsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Cohorts'
        }
    }
    
    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cohort Description"
                    onChange={functions.onChange.bind(this, "cohort_description")}
                    maxLength={512}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cohort Clinic"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, "cohort_clinic")}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cohort Payer"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, "cohort_payer")}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cohort Provider"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, "cohort_provider")}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Cohort Case Manager"
                    maxLength={128}
                    onChange={functions.onChange.bind(this, "cohort_case_manager")}
                    
                />
            </DataForm>
        );
    }
}