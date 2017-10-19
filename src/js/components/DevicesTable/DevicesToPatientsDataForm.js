import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class DeviceFirmwareDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'DeviceFirmware'
        }
    }
    
    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Device ID"
                    onChange={functions.onChange.bind(this, "device_id")}
                    type="number"
                    required
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Patient ID"
                    onChange={functions.onChange.bind(this, "patient_id")}
                    type="number"
                    required
                    
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Start Time"
                    onChange={functions.onChange.bind(this, "start_time")}
                    required
                    
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Start Date"
                    onChange={functions.onChange.bind(this, "start_date")}
                    className="md-cell"
                    required
                    
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="End Time"
                    onChange={functions.onChange.bind(this, "end_time")}
                    
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="End Date"
                    onChange={functions.onChange.bind(this, "end_date")}
                    className="md-cell"
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Assigned To Patient By User Id"
                    onChange={functions.onChange.bind(this, "assigning_user_id")}
                    type="number"
                    required
                    
                />
            </DataForm>
        );
    }
}