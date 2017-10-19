import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class MedicationTracksDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'MedicationTracks'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Manifest ID"
                    onChange={functions.onChange.bind(this, "manifest_id")}
                    type="number"
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Medication Track Ruleset ID"
                    onChange={functions.onChange.bind(this, "manifest_id")}
                    type="number"
                    
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Medication Track Zero Time"
                    onChange={functions.onChange.bind(this, "medication_track_zero_time")}
                    
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Medication Track Zero Date"
                    onChange={functions.onChange.bind(this, "medication_track_zero_date")}
                    className="md-cell"
                    
                />
            </DataForm>
        );
    }
}