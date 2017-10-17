import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class AddressTypeDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="AddressType" onSubmit={this.props.onSubmit}>
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Address Type Description"
                    name="address_type_description"
                    maxLength={64}
                    required
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}