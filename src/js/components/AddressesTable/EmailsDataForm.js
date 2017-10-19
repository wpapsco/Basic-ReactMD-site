import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class EmailsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'Emails'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Person ID"
                    onChange={functions.onChange.bind(this, "person_id")}
                    type="number"
                    required
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Email Address"
                    onChange={functions.onChange.bind(this, "email_address")}
                    maxLength={256}
                    required
                    
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Email Type ID"
                    onChange={functions.onChange.bind(this, "email_type_id")}
                    type="number"
                    required
                    
                />
                <YesNoSelect
                    id="contact-select"
                    label="Primary Email Address"
                    onChange={functions.onChange.bind(this, "primary_email_address")}
                    
                />
            </DataForm>
        );
    }
}