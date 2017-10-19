import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class ManifestsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Manifests'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Manifest Creation Time"
                    onChange={functions.onChange.bind(this, "manifest_creation_time")}
                    
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Manifest Creation Date"
                    onChange={functions.onChange.bind(this, "manifest_creation_date")}
                    className="md-cell"
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Created By User ID"
                    onChange={functions.onChange.bind(this, "created_by_user_id")}
                    type="number"
                    
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Manifest Changed Time"
                    onChange={functions.onChange.bind(this, "manifest_changed_time")}
                    
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Manifest Changed Date"
                    onChange={functions.onChange.bind(this, "manifest_changed_date")}
                    className="md-cell"
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Changed By User ID"
                    onChange={functions.onChange.bind(this, "changed_by_user_id")}
                    type="number"
                    
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Manifest Zero Time"
                    onChange={functions.onChange.bind(this, "manifest_zero_time")}
                    
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Manifest Zero Date"
                    onChange={functions.onChange.bind(this, "manifest_zero_date")}
                    className="md-cell"
                    
                />
            </DataForm>
        );
    }
}