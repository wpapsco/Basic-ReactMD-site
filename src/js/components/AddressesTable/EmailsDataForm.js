import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class EmailsDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="Emails">
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Person ID"
                    name="person_id"
                    type="number"
                    required
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Email Address"
                    name="email_address"
                    maxLength={256}
                    required
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Email Type ID"
                    name="email_type_id"
                    type="number"
                    required
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="contact-select"
                    label="Primary Email Address"
                    name="primary_email_address"
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}