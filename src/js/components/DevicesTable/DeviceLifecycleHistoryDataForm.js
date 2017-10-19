import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class DeviceLifecycleHistoryDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'DeviceLifecycleHistory'
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
                    label="Device Lifecycle Status ID"
                    onChange={functions.onChange.bind(this, "device_lifecycle_status_id")}
                    maxLength={3}
                    
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Lifecycle Start Time"
                    onChange={functions.onChange.bind(this, "lifecycle_start_time")}
                    required
                    
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Lifecycle Start Date"
                    onChange={functions.onChange.bind(this, "lifecycle_start_date")}
                    className="md-cell"
                    required
                    
                />
            </DataForm>
        );
    }
}