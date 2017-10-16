import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class DeviceLifecycleHistoryDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="DeviceLifecycleHistory">
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Device ID"
                    name="device_id"
                    type="number"
                    required
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Device Lifecycle Status ID"
                    name="device_lifecycle_status_id"
                    maxLength={3}
                    onChange={this.props.onChange}
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Lifecycle Start Time"
                    name="lifecycle_start_time"
                    required
                    onChange={this.props.onChange}
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Lifecycle Start Date"
                    name="lifecycle_start_date"
                    className="md-cell"
                    required
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}