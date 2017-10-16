import React from "react";
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import SelectField from 'react-md/lib/SelectFields';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';
import YesNoSelect from '../YesNoSelect';
import DataForm from '../DataForm';

export default class AddressesDataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataForm tableName="Addresses">
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
                    label="Address Type ID"
                    name="address_type_id"
                    type="number"
                    required
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Street Address"
                    name="street_address"
                    maxLength={128}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Street Address 2"
                    name="street_address 2"
                    maxLength={128}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="City"
                    name="city"
                    maxLength={64}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="State/Province"
                    name="state_province"
                    maxLength={64}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="County"
                    name="county"
                    maxLength={3}
                    onChange={this.props.onChange}
                />
                <TextField
                    id="floating-center-title"
                    className="md-cell"
                    label="Country"
                    name="country"
                    maxLength={2}
                    onChange={this.props.onChange}
                />
                <YesNoSelect
                    id="contact-select"
                    label="Primary Contact Address"
                    name="primary_contact_address"
                    onChange={this.props.onChange}
                />
            </DataForm>
        );
    }
}