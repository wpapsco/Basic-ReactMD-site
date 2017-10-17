import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class DeviceFirmwareDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <DataForm tableName="DeviceFirmware" onSubmit={this.props.onSubmit}>
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
                    label="Firmware Version"
                    name="firmware_version"
                    maxLength={16}
                    required
                    onChange={this.props.onChange}
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Firmware Install Time"
                    name="firmware_install_time"
                    required
                    onChange={this.props.onChange}
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Firmware Install Date"
                    name="firmware_install_date"
                    className="md-cell"
                    required
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}