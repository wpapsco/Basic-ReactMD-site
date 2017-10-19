import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class DeviceLifecycleStatesDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'DeviceLifecycleStates'
        }
    }
    
    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Device Lifecycle Status"
                    onChange={functions.onChange.bind(this, "device_lifecycle_status")}
                    maxLength={24}
                    required
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Device Lifecycle Description"
                    onChange={functions.onChange.bind(this, "device_lifecycle_description")}
                    maxLength={255}
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Device Lifecycle Ordinal"
                    onChange={functions.onChange.bind(this, "device_lifecycle_ordinal")}
                    type="number"
                    maxLength={4}
                    required
                    
                />
            </DataForm>
        );
    }
}