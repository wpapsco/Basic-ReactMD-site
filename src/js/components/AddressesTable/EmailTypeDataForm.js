import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';
var functions = require('../../DataFormFunctions').default;

export default class EmailTypeDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tableName': 'EmailType'
        }
    }

    render() {
        return (
            <DataForm tableName={this.state.tableName} onSubmit={functions.onSubmit.bind(this)}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Email Type Description"
                    onChange={functions.onChange.bind(this, "email_type_description")}
                    maxLength={64}
                    required
                    
                />
            </DataForm>
        );
    }
}