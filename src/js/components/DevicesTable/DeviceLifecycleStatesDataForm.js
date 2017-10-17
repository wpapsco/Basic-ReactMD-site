import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class DeviceLifecycleStatesDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <DataForm tableName="DeviceLifecycleStates" onSubmit={this.props.onSubmit}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Device Lifecycle Status"
                    name="device_lifecycle_status"
                    maxLength={24}
                    required
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Device Lifecycle Description"
                    name="device_lifecycle_description"
                    maxLength={255}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Device Lifecycle Ordinal"
                    name="device_lifecycle_ordinal"
                    type="number"
                    maxLength={4}
                    required
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}