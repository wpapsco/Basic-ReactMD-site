import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class RegimensDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Regimens'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Well ID"
                    onChange={functions.onChange.bind(this, "well_id")}
                    type="number"
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug's Scientific Name"
                    onChange={functions.onChange.bind(this, "drug_scientific_name")}
                    maxLength={128}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Drug's Generic Name"
                    onChange={functions.onChange.bind(this, "drug_generic_name")}
                    maxLength={128}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Dosage"
                    onChange={functions.onChange.bind(this, "regimen_dosage")}
                    maxLength={10}
                    type="number"
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Route"
                    onChange={functions.onChange.bind(this, "regimen_route")}
                    maxLength={2}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Frequency"
                    onChange={functions.onChange.bind(this, "regimen_frequency")}
                    maxLength={3}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication NDC"
                    onChange={functions.onChange.bind(this, "regimen_medication_ndc")}
                    maxLength={13}
                    
                />
            </DataForm>
        );
    }
}