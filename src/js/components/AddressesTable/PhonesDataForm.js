import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class PhonesDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="Phones" onSubmit={this.props.onSubmit}>
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
                    label="Phone"
                    name="phone_number"
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Phone Type ID"
                    name="phone_type_id"
                    type="number"
                    required
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="contact-select"
                    label="Primary Contact Phone"
                    name="primary_contact_phone"
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}