import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from './YesNoSelect';
import DataForm from './DataForm';

export default class DeviceFirmwareDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <DataForm tableName="DevicesToPatients">
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
                    label="Patient ID"
                    name="patient_id"
                    type="number"
                    required
                    onChange={this.props.onChange}
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="Start Time"
                    name="start_time"
                    required
                    onChange={this.props.onChange}
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="Start Date"
                    name="start_date"
                    className="md-cell"
                    required
                    onChange={this.props.onChange}
                />
                <TimePicker
                    id="appointment-time-auto"
                    className="md-cell"
                    label="End Time"
                    name="end_time"
                    onChange={this.props.onChange}
                />
                <DatePicker
                    id="appointment-date-auto"
                    label="End Date"
                    name="end_date"
                    className="md-cell"
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Assigned To Patient By User Id"
                    name="assigning_user_id"
                    type="number"
                    required
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}